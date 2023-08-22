function falaTexto(comeco) {
    function restoTexto(resto) {
        return comeco + " " + resto;
    }
    return restoTexto;
}

const inicio = falaTexto("Olá");
// console.log(inicio);
const final = inicio("Mundo");
// console.log(final);

// ------------------------------------

function criaMultiplicacao(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicacao(2); // <---- As contantes recebem a função anônima
const triplica = criaMultiplicacao(3); 
const quadriplica = criaMultiplicacao(4); 
console.log(duplica(4)); // <----------------- Chama a função anônima passando como argumento a número 4 
console.log(triplica(3));
console.log(quadriplica(10));