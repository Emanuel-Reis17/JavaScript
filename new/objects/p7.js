function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (valorAumento){
    this.preco += valorAumento;
};
Produto.prototype.desconto = function (valorDesconto){
    this.preco -= valorDesconto;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percetual) {
    this.preco = ((100 + percetual)/ 100)* this.preco;
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true, 
        configurable: false, 
        get: function() {
            return estoque;
        }, 
        set: function(valor) {
            if (typeof valor !== "number") return;
            estoque = valor;
        } 
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, 'Preta');
const caneca = new Caneca("Xícara", 12.00, "Porcelana", 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);