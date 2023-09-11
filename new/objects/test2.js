function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valorAumento) {
    this.preco += valorAumento;
};
Produto.prototype.desconto = function(valorDesconto) {
    this.preco -= valorDesconto;
};
// Camiseta herdeira de Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Herança 
Camiseta.prototype.constructor = Camiseta // Atribuindo a função construtora 

function Caneca(nome, preco, estoque, material) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false, 
        get: function() {
            return estoque;
        }, 
        set: function(valor) {
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Mahalo", 22, "Preto");
const caneca = new Caneca("React", 30.00, 5, "Porcelanato");
camiseta.aumento(200);
console.log(camiseta);
caneca.estoque = 200;
console.log(caneca.estoque);
console.log(caneca);
