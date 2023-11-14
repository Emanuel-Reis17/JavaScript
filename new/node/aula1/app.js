// Importando todo o módulo
// const mod1 = require("./mod1");
// console.log(mod1.falaNome());

// Importando apenas a função
// const falaNome = require("./mod1").falaNome;
// console.log(falaNome());

// Separando em outras variáveis
// const mod1 = require("./mod1");
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// Destructuring
// const { nome, sobrenome, falaNome} = require("./mod1");
// console.log(falaNome());

// Usando classes
// const { Pessoa } = require("./mod1");
// const p1 = new Pessoa("Emanuel");
// console.log(p1);

// Utilizando sem colocar o caminho
const path = require("path");
const axios = require("axios");
axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

const { Pessoa } = require("./mod1");
const mod1 = require("./mod1");
const p1 = new Pessoa("Emanuel");
console.log(p1);
console.log(mod1);
