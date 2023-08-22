const dados = function() {
    console.log("Sou um dado");
}

function execute(func) {
    func();
}
// execute(dados);

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

// funcao( 1, 2, 3, 4, 5, 6);

function objs({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let pessoa = {nome: "Emanuel", sobrenome: "Reis", idade: 18};
objs(pessoa);

function arrays(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}

arrays('+', 0, 10, 20, 30 , 40, 50);

const conta = (...args) => {
    console.log(args);
};

conta('+', 0, 10, 20, 30 , 40, 50);