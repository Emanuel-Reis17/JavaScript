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

class Tablet extends Dispositivo {
    constructor(nome, modelo, cor, versao, tv, radio, infravermelho) {
        super(nome, modelo);
        this.cor = cor;
        this.versao = versao;
        this._tv = tv || false;
        this._radio = radio || false;
        this.infravermelho = infravermelho || false;
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

class Computer extends Dispositivo {
    constructor(nome, processador, placamae, fonte, ram, placaVideo) {
        super("Computador");
        this.processador = processador;
        this.placaMae = placamae;
        this.fonte = fonte;
        this.ram = ram;
        this.placaVideo = placaVideo || false;
        this[_preco];
    }
    get preco() {
        console.log(`R$${this[_preco]}`);
    }
    set preco(valor) {
        this[_preco] = valor;
    }
}

const s10 = new Smartphone("Samsung", "Galaxy S10", "Azul", 13);
const ipadPro = new Tablet("Apple", "Ipad Pro", "Prata", 15);
console.log(ipadPro);
ipadPro.preco = 1000;
console.log(ipadPro.preco);

const pc1 = new Computer("Ryzen", "b550", 600, 16);
console.log(pc1);
pc1.preco = 800;
pc1.preco;