import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { take } from 'rxjs/operators'

@Injectable()
export class AuthService {
  erros = {
    'auth/invalid-email': 'Email informado não é valido',
    'auth/email-already-in-use': 'Email informado já esté em uso',
    'auth/wrong-password': 'A senha informada está incorreta',
    'auth/user-not-found': 'Usuário não cadastrado',
    'auth/network-request-failed': 'Sem rede, verifique sua conexão'
  };
  user = null;
  // user$ = null;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private snack: MatSnackBar
  ) {
    // this.auth.onAuthStateChanged(user => this.user$ = user);
  }

  initAuthState() {
    this.auth.authState.subscribe(user => {
      this.user = user
    });
  }

  cadastrar(email: string, senha: string) {
    console.log(this.user);
    this.auth
      .createUserWithEmailAndPassword(email, senha)
      .then((dados) => {
        this.verificarUser();
        // form.reset();
      })
      .catch((erro) => {
        this.snack.open(this.erros[erro.code], 'Fechar', { duration: 10000 });
        this.verificarUser();
      });
  }

  login(email: string, senha: string) {
    this.auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        this.auth.authState.pipe(take(1)).subscribe(user => {
          this.user = user;
          console.log(this.user);
          if (!this.user?.emailVerified) {
            this.logout();
            this.snack.open(
              'O usuário ainda não foi confirmado. Verifique seu email.',
              'Fechar',
              { duration: 10000 }
            );
          } else {
            this.navegarAoLogin();
          }
        });
      })
      .catch((erro) => {
        console.log(erro);
        this.snack.open(this.erros[erro.code], 'Fechar', { duration: 10000 });
      });
  }

  loginGoogle() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        // console.log(result);
        this.navegarAoLogin();
      })
      .catch((erro) => console.log(erro));
  }

  verificarUser() {
    this.user = this.auth.currentUser;
    this.user.then((user) => {
      //   console.log(user.emailVerified);
      if (!user.emailVerified) {
        user
          .sendEmailVerification()
          .then((dados) => this.router.navigate(['/verificar-cadastro']))
          .catch((erro) => console.log('nao foi'));
      } else {
        console.log('Email já verificado');
      }
    });
  }

  navegarAoLogin() {
    this.router.navigate(['conteudo'])
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['login'])
  }
}
