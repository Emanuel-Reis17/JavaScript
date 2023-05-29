function selecionarLevel(){
    //Selecionando a dificuldade
    section1 = document.querySelector(".section1").style.display = 'none';
    level = document.querySelector("#level");

    //Verificado erro na seleção da dificuldade
    if(level.value.length == "" || level.value > 3){
        alert("[ERRO] Por favor digite o número corretamente")
        section1 = document.querySelector(".section1").style.display = 'block';
    } else {
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
    user_number = document.querySelector("#user_number");
    user_number = Number(user_number.value);
    alert(user_number);
    while(chances > 1){
        if(user_number == random_number){
            alert("PARABENS PORRA");
            resultado.innerText = "massa"
        }
    }
}