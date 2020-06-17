import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as ConteudoActions from './conteudo.actions'

export interface Conteudo {
    nome: string;
    sobrenome: string;
}

@State<Conteudo>({
    name: 'Conteudo',
    defaults: {
        nome:'nome',
        sobrenome: ''
    }
})
@Injectable()
export class ConteudoState {
    @Action(ConteudoActions.AdicionarNome)
    adicionarNome(ctx: StateContext<Conteudo>, action: ConteudoActions.AdicionarNome) {
        const state = ctx.getState();
        console.log(state)
        ctx.setState({
            ...state,
            nome: action.payload
        })
    }
}