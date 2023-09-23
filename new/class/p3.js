class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} está ligado.`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} está desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log("Método alterado.");
    }
    falaOi() {
        console.log("OI");
    }
}

const s10 = new Smartphone('Samsung', 'Prata', 'Galaxy S10');
// console.log(s10);

const t1 = new Tablet("Ipad", true);
// t1.ligar();
// t1.ligar();
t1.falaOi();