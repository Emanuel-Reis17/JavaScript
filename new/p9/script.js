const frutas = ["Maçã", "Pêra", "Uva"];
const pessoa = {
    nome: "Emanuel", 
    sobrenome: "Reis", 
    idade: 18
}
console.log("|--- For in -------------------------|");
for (let i in frutas) {
    console.log(frutas[i]);
}
console.log("|--- For in-------------------------|");
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}
console.log("|--- For of -------------------------|");
for (let valor of frutas) {
    console.log(valor);
}
console.log("|--- ForEach(el, key, array) -------------------------|");
frutas.forEach((el, index, array) => {
    console.log(el, index, array);
});