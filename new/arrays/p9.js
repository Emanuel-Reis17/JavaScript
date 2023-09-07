const numeros = [1, 19, 32, 54, 29, 50, 80, 90, 45, 67];
let total = 0;
numeros.forEach((valor, indice, array) => {
    total = array.filter(valor => valor %2 === 0);
    console.log(total)
});
console.log(total);

const pessoas = [
    {nome: "Emanuel", idade: 18}, 
    {nome: "Gabriel", idade: 29}, 
    {nome: "Camile", idade: 45}, 
    {nome: "Ismael", idade: 55}, 
    {nome: "Emanuelly", idade: 24}
];
let idades = [];
pessoas.forEach((valor, indice, array) => {
    if (valor.idade < 40) {idades.push(valor)}
});

console.log(idades);
