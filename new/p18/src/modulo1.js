const nome = "Emanuel";
const sobrenome = "Reis";
const idade = 18;

export default function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome as seila, idade };
