const randomicNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dataAtual = () => {
    data = new Date();
    return `${data.toLocaleTimeString()} | ${data.toLocaleDateString()}`;
}
class Cliente {
    constructor(login, senha, nome, tipoConta) {
        this.id = randomicNumber(0, 999)
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.tipoConta = tipoConta;
        this.saldo = 1412.00;
        this.saquesDiarios = 3;
        this.dataSaques = [];
        this.dataDepositos = [];
    }

    /**
     * Retorna o saldo em conta
     * @returns O saldo atual da conta
     */
    obterSaldo = () => {
        return `R$${this.saldo.toFixed(2)}`;
    }

    /**
     * Deposita um valor na conta
     * @param {Float} valor = Valor a ser depositado na conta
     * @returns O saldo atual da conta
     */
    depositar = valor => {
        if (this.tipoConta.toLowerCase() === 'corrente') this.saldo += (1.00/100) * valor + valor;
        else this.saldo += (0.30/100) * valor + valor;
        this.dataDepositos.push(`R$${this.saldo.toString()}`)
        return 'Seu saldo agora é de R$' + this.saldo.toFixed(2);
    }

    /**
     * Debita um valor da conta
     * @param {Float} valor = valor a ser debitado
     * @returns O saldo atual da conta
     */
    sacar = valor => {
        if (this.saquesDiarios != 0) {
            this.saquesDiarios -= 1;
            this.saldo -= valor;
            this.dataSaques.push(`R$${this.saldo.toString()}`)
            return 'Seu saldo atual é de R$' + this.saldo.toFixed(2);
        } else {
            console.log('Limite de saques diários atingido.');
            return false;
        }
    }

    /**
     * Retorna as atividades realizadas na conta
     * @returns Últimos depósitos, saques e saldo atual da conta
     */
    extrato = () => {
        console.log('---------- EXTRATO DA CONTA ----------');
        console.log('Último(s) depósito(s):');
        for (let i of this.dataDepositos) {
            console.log(i);
        }
        console.log('------');
        console.log('Último(s) saques(s):')
        for (let i of this.dataSaques) {
            console.log(i);
        }
        console.log('------');
        console.log(`Saldo Atual: R$${this.saldo}`)
        return true;
    } 
}

const conta1 = new Cliente('admin', 'admin', 'Emanuel Reis', 'Corrente')

const logarConta = (login=null, pass=null) => {
    if (login !== conta1.login || pass !== conta1.senha) {
        handleErrors('Erro ao logar na conta.');
    } else {
        console.log('Logado');
        openMenu(2);
        openMenu(2);
        openMenu(3);
        openMenu(3);
        openMenu(2);
        openMenu(4);
    }
}

const openMenu = (valor) => {
    let response = valor
    switch (response) {
        case 1:
            console.log('Obtendo saldo da conta...')
            console.log(conta1.obterSaldo())
            break;
        case 2:
            console.log('Depositando saldo na conta...')
            console.log(conta1.depositar(1200))
            break;
        case 3:
            console.log('Debitando o valor na conta...')
            console.log(conta1.sacar(200));
            break;
        case 4:
            console.log('Exibindo o extrato...')
            conta1.extrato();
            break
    }
}

const handleErrors = err => {throw new Error(`[ERROR] ~ ${err}`)}

// logarConta('admin', 'admin')
console.log(dataAtual())