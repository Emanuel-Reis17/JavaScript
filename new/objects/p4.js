const produto = {nome: "Camisa", preco: 20};
// const outraCoisa = {...produto};
const outraCoisa = Object.assign({}, produto); // Copia os valores de um Objeto
Object.freeze(produto); // Torna o objeto inalterável
console.log(Object.keys(outraCoisa)); // Retorna as chaves do Objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'preco')); // Retorna as configurações da propriedade de um Objeto
console.log(Object.values(produto)); // Retorna os valores do Objeto
console.log(Object.entries(produto)); // Retorna um [] com as propriedades do Objeto