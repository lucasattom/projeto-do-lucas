
export const ADICIONAR_NOME = '[Conteudo] Adicionar Nome'
export const ADICIONAR_SOBRENOME = '[Conteudo] Adicionar Sobreome'

export class AdicionarNome {
    static readonly type = ADICIONAR_NOME;

    constructor(public payload: string) {}
}

export class AdicionarSobrenome {
    static readonly type = ADICIONAR_SOBRENOME;

    constructor(public payload: string) {}
}