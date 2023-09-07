// Criando um array chamado banco que guardará as contas criadas.
const bancoInter = [];
//Função Construtora para cada conta.
function Account(nome, idade, saldo) {
    this.nome = nome, 
    this.idade = idade, 
    this.saldo = saldo,

    this.deposito = (valor) => {
        this.saldo += valor;
    }, 
    this.sacar = (valor) => {
        this.saldo-=valor;
    }, 
    this.pix = (valor, destino) => {
        this.saldo-=valor;
        destino.saldo+=valor;
        console.log(`Transferência para ${destino.nome} foi feita com sucesso!`);
    }, 
    this.perfil = () => {
        console.log("---| Perfil |------------------------------");
        console.log(`Usuário: ${this.nome} \nIdade: ${this.idade} \nSaldo: ${this.saldo}`);
        console.log("-------------------------------------------");
    }
}
//Função para criar as contas e inserir no banco.
function createAccount(nome, idade, saldo) {
    let conta = new Account(nome, idade, saldo);
    bancoInter.push(conta);
    return conta;
}
//Criando as contas.
const conta1 = createAccount("Emanuel", 18, 1800);
const conta2 = createAccount("Camile", 16, 1000);
const conta3 = createAccount("Ismael", 18, 1200);
const conta4 = createAccount("Gabriel", 19, 1450);
const conta5 = createAccount("Lucas", 18, 1300);
//Consultando as contas criadas no banco.
bancoInter.forEach(valor => console.log(valor.perfil()));
