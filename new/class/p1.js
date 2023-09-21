class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

/*Constructor Function */
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype = Object.create(Pessoa.prototype);
Pessoa2.prototype.constructor = Pessoa2

const p1 = new Pessoa("Emanuel", "Reis");
const p2 = new Pessoa2("Melissa", "Reis");
p2.falar();
// const p3 = new Pessoa("Camile", "Cristine");
// const p4 = new Pessoa("Ismael", "Lima");
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
