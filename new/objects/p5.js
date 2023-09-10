function Pessoa(nome, sobrenome) {
    this.nome = nome, 
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = () => this.nome + " " + this.sobrenome;

const pessoa1 = new Pessoa("Luiz", ".O");
const pessoa2 = new Pessoa("Maria", ".A");

console.dir(pessoa1);
console.dir(pessoa2);
