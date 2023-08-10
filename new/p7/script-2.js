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

console.log(r, numero);
console.log(nome, outroNome, restante);