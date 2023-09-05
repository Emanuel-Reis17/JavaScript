const numeros = [1, 19, 32, 54, 29, 50, 80, 90, 45, 67];
const numerosDobro = numeros.filter(valor => valor %2 === 0);
console.log(numerosDobro);

const pessoas = [
    {nome: "Emanuel", idade: 18}, 
    {nome: "Gabriel", idade: 29}, 
    {nome: "Camile", idade: 45}, 
    {nome: "Ismael", idade: 55}, 
    {nome: "Emanuelly", idade: 24}
];

const nomePessoa = pessoas.map(valor => valor.nome);
const idadePessoa = pessoas.map(valor => valor.idade);
const newArray = pessoas.map(function(valor, indice) {
    return { ...valor, nome: "", id: indice};
});

console.log(nomePessoa);
console.log(idadePessoa);
console.log(newArray);
console.log(pessoas);
