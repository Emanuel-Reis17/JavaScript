// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     let estoquePrivado = estoque;
//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,     // Exibir chave
//         configurable: true,  // Configurável (Configurar novamente (reescrever))
//         get: function() {
//             return estoquePrivado;
//         }, 
//         set: function(valor) {
//             if (typeof valor !== 'number') {
//                 throw new TypeError("Mensagem");
//             }
//             estoquePrivado = valor;
//         }
//     });
// }
// const p1 = new Produto("Camiseta", 20, 3);
// // console.log(p1);
// p1.estoque = "O valor que eu quero";
// console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        }, 
        set nome(valor) {
            if (typeof valor !== "string") {
                throw new TypeError("Mensagem");
            }
            nome = valor;
        }
    };
}

const p2 = criaProduto("Camiseta");
p2.nome = 89;
console.log(p2.nome);
