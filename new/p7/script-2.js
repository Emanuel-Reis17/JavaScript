const pessoa = {
    // nome: 'Emanuel', 
    // sobrenome: 'Reis', 
    idade: 18,
    endereco: {
        rua: 'R. São Mateus', 
        numero: '8E'
    }
}
const {nome = 'Indefinido', sobrenome: outroNome = 'NADA', ...restante} = pessoa;
const { 
    endereco: {
        rua: r = '12345', 
        numero
    }, 
    endereco } = pessoa;

// console.log(r, numero);
// console.log(nome, outroNome, restante);

// Praticando
const filha = {
    // nome: "Melissa", 
    sobrenome: "Reis", 
    // idade: 15, 
    classe: "rica", 
    trabalhos: {
        // clt: "Suporte",
        // freelancer: "programadora"
    },
    rendas: ["Investimentos", "Marketing"]
}

const {nome: minhaFilha = "Filha", sobrenome, idade = "Adolescente", trabalhos: {clt: carteiraAssinada = "desempregada", freelancer: freelance = "Design"}, rendas: fonteRenda}= filha;

console.log(filha);
console.log(minhaFilha, sobrenome, idade, carteiraAssinada, freelance, fonteRenda[1]);