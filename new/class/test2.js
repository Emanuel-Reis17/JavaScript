class Dispositivo {
    constructor(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.bateria = 0;
    }

    carregar(valor) {
        if (this.bateria > valor) {   
            return;
        }
        if (valor === 100 && this.bateria === 100) {
            console.log(`${this.nome} já está carregado.`);
            return;
        }
        this.bateria = valor;
        console.log(`${this.nome} está com ${this.bateria}%`);
    }
}

const _preco = Symbol("Preco");
class Smartphone extends Dispositivo {
    constructor(nome, modelo, cor, versao) {
        super(nome, modelo);
        this.cor = cor;
        this.versao = versao;
        this[_preco];
    }

    get preco() {
        console.log(`R$${this[_preco]}`);
        return this[_preco];
    }
    set preco(valor) {
        this[_preco] = valor;
    }
}

const s10 = new Smartphone("Samsung", "Galaxy S10", "Azul", 13);