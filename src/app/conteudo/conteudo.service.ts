import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngxs/store';
import * as Conteudo from './conteudo.actions';

@Injectable()
export class ConteudoService {

    constructor(private authService: AuthService, private db: AngularFirestore, private store: Store) {}

    atualizarDados(dados: string) {
        this.db.collection("descricao").doc(`${this.authService.userID}`).set({dado: dados})
    }

    addNome(valor: string) {
        this.store.dispatch(new Conteudo.AdicionarNome(valor)).subscribe(() => console.log('dispatched: ' + valor));
    }
}