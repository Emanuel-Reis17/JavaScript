alert("BEM-VINDO AO GAME!\nNesse game, você terá que acertar o número secreto escolhido pelo computador! Está preparado?");
level = prompt("Escolha o nível de dificuldade: \n[1]Iniciante\n[2]Amador\n[3]Profissional");

if(level == 1){
    chances = 10;
} else if(level == 2){
    chances = 7;
} else if(level == 3){
    chances = 5;
}
    
random_number = Math.floor(Math.random() * 100);
user_number = prompt("Número secreto gerado, agora é a sua vez de acertar!\nQual é o número secreto?");

while(chances > 0){
    chances--;
    if(user_number == random_number){
        alert(`VOCÊ ACERTOU! Meus parabéns, o número secreto é ${random_number}`);
        break;
    } else {
        if(user_number > random_number){
            user_number = prompt(`ERRADO! O número que você digitou é maior do que o número secreto, você tem ${chances} tentativas\nQual é o número secreto?`);
        } else if(user_number < random_number){
            user_number = prompt(`ERRADO! O número que você digitou é menor do que o número secreto, você tem ${chances} tentativas\nQual é o número secreto?`);
        }
    }
}

if(chances == 0){
    alert(`Que pena, VOCÊ PERDEU! O número secreto era ${random_number}`);
}