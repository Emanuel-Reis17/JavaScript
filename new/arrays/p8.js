const numeros = [1, 19, 32, 54, 29, 50, 80, 90, 45, 67]; 
const numerosPares = numeros.filter(valor => valor %2 == 0)
    .map(valor => valor *2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);