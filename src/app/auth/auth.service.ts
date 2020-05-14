import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  erros = {
    'auth/invalid-email': 'Email informado não é valido',
    'auth/email-already-in-use': 'Email informado já esté em uso',
  };
  user = null;
  constructor(private auth: AngularFireAuth, private router: Router, private snack: MatSnackBar) {}

  cadastrar(email: string, senha: string) {
    this.auth.createUserWithEmailAndPassword(email, senha).then((dados) => {
        console.log(dados);
        this.verificarUser();
        // form.reset();
      })
      .catch((erro) => {
        this.snack.open(this.erros[erro.code], 'Fechar', { duration: 10000 });
        this.verificarUser();

      });;
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
}
