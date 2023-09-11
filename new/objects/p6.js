function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(valorDesconto) {
    this.preco = this.preco - (this.preco * (valorDesconto / 100));
};

Produto.prototype.aumento = function(valorAumento) {
    this.preco = this.preco + (this.preco * (valorAumento / 100));
};

const p1 = new Produto("Camiseta", 50);
// console.log(p1);

const p2 = {
    nome: "Caneca",
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // Setando o prototype
p2.aumento(30);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 113
    },
}); // Cria O Objeto setando o prototype e setando as chaves com suas configurações ao mesmo tempo 

console.log(p3);