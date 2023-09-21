const _preco = Symbol('Preço');
const _combustivel = Symbol('Combustível');
class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this[_combustivel];
        this[_preco] = 0;
    }

    get combustivel() {
        return this[_combustivel];
    }
    get preco() {
        return this[_preco];
    }

    set combustivel(valor) {
        if (typeof valor !== 'string') {
            throw new TypeError("O tipo do parâmetro precisa ser string");
        } else if (!['gasolina', 'alcool'].includes(valor.toLocaleLowerCase())) {
            console.log(`Valor inválido: ${valor}`);
        } else {
            this[_combustivel] = valor;
        }
    }
    set preco(valor) {
        if (typeof valor !== 'number') {
            throw new TypeError("O parâmetro precisa ser number");
        } else {
            this[_preco] = valor;
        }
    }

    inspecionar() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Preço: ${this[_preco]}`);
        console.log(`Combustível: ${this[_combustivel]}`);
    }
}

const carro1 = new Carro("Ford", "Ecosport", "Prata");
const carro2 = new Carro("Fiat", "Uno", "Branco");
// console.log(carro2);
carro2.combustivel = "Alcool";
console.log(carro2.combustivel);
carro1.inspecionar();
// carro1.preco = 3000;
// console.log(carro1.preco);
// carro1.combustivel = "Gasolina";
// console.log(carro1.combustivel);
// carro1.inspecionar();