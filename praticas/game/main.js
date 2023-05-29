section2 = document.querySelector(".section2").style.display = 'none';
function selecionarLevel(){
    //Selecionando a dificuldade
    section1 = document.querySelector(".section1").style.display = 'none';
    level = document.querySelector("#level");

    //Verificado erro na seleção da dificuldade
    if(level.value.length == "" || level.value > 3){
        alert("[ERRO] Por favor digite o número corretamente")
        section1 = document.querySelector(".section1").style.display = 'block';
    } else {
        alert("Dificuldade selecionada!");
        section2 = document.querySelector(".section2").style.display = 'block';
        level = Number(level.value);
        if(level == 1){
            chances = 10;
        } else if(level == 2){
            chances = 7;
        } else if(level == 3){
            chances = 5;
        }
    }
}

//Gerando número secreto
random_number = Math.floor(Math.random() * 100);
resultado = document.querySelector(".resultado");

//Iniciando o game
function verificarNumero(){
    //Recebendo o número do usuário
    user_number = document.querySelector("#user_number");
    user_number = Number(user_number.value);
    chances--;//OBS: Ao clicar, o usuário já usa 1 chance
    while(chances > 0){
        if(user_number == random_number){
            resultado.innerText = `Meus parabéns! O número secreto é ${random_number}`;
            break;
        } else {
            if(user_number > random_number){
                resultado.innerText = `ERRADO! O número que você digitou é maior do que o número secreto\nVocê tem ${chances} tentativas`;
            } else if(user_number < random_number){
                resultado.innerText = `ERRADO! O número que você digitou é menor do que o número secreto\nVocê tem ${chances} tentativas`;
            }
            break;
        }
    }
    if(chances == 0){
        resultado.innerText = `VOCÊ PERDEU! O número secreto é ${random_number}`
    }
}