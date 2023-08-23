(function(nome, idade, sobrenome) { // IIFE Immediately Invoked Function Expression
    const nomePessoa = nome;
    const idadePessoa = idade;
    let executaNome = function() {
        return nomePessoa + " " + sobrenome + " tem " + idadePessoa + " anos de idade.";
    }
    console.log(executaNome());
})("Emanuel", 18, "Reis");