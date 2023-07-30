function verificar(){
    resultado = document.querySelector(".resultado");

    //Colocando as informações dentro de um objeto
    anos = {};
    anos.nascimento = document.querySelector("#anoNascimento");
    anos.atual = document.querySelector("#anoAtual");
    
    //Verificando erros nas informações
    if (anos.nascimento.value.length == 0 || anos.atual.value.length == 0 || anos.nascimento.value > anos.atual.value){
        alert("[ERRO] Por favor, preencha as informações!");
    } else {
        idade = Number(anos.atual.value - anos.nascimento.value)
    }

    //Iniciando a verificação
    if(idade <= 20){
        resultado.innerHTML = `Você tem ${idade} anos de idade, está na <strong>melhor fase da vida!</strong>`;
    } else if(idade > 20 && idade <= 30){
        resultado.innerHTML = `Você tem ${idade} anos de idade, está na <strong>fase adulta</strong>!`;
    } else if(idade > 30 && idade <= 50){
        resultado.innerHTML = `Você tem ${idade} anos de idade, está na <strong>fase madura</strong>!`;
    } else if(idade > 50 && idade < 60){
        resultado.innerHTML = `Você tem ${idade} anos de idade, está na fase de um(a) <strong>coroa</strong>!`;
    } else if(idade >= 60 && idade <= 100){
        resultado.innerHTML = `Você tem ${idade} anos de idade, está na <strong>fase de envelhecimento</strong>!`;
    } else if(idade > 100 && idade <= 130){
        resultado.innerHTML = `Você tem ${idade} anos de idade, parabéns por chegar nessa idade, você viveu muito, mas está muito próximo da <strong>morte</strong>.`;
    } else {
        alert("[ERRO] Idade Inexistente! Por favor, tente novamente");
        resultado.innerText = "[ERRO]"
    }
}
