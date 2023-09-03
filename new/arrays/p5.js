const numbers = [0, 10, 34, 5, 8, 90, 67, 2, 5, 1, 77];
const numerosFiltrados = numbers.filter(valor => valor >= 10);
console.log(numerosFiltrados);

const pessoas = [
    {nome: "Emanuel", idade: 18}, 
    {nome: "Gabriel", idade: 29}, 
    {nome: "Camile", idade: 45}, 
    {nome: "Ismael", idade: 55}, 
    {nome: "Emanuelly", idade: 24}
]

const nomesGrandes = pessoas.filter(valor => valor.nome.length >= 7); // Nomes maiores que 7 letras
const idadeGrandes = pessoas.filter(valor => valor.idade >= 30); // Idades maiores que 30
const nomeComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith("l")); // Nome que termina com "l"
console.log(nomeComA);