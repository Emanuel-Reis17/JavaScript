let user = {};
let times = false;

while(times < 3){
    user.name = prompt("Qual é o seu nome? ");
    user.email = prompt("Digite seu email: ");
    user.password = prompt("Digite seu senha: ");
    
    if(user.name == "emanuel" && user.email == "emanuel@gmail.com" && user.password == "415263"){
        alert(`Dados cadastrados! Seja muito bem-vindo senhor ${user.name}`);
        break;
    } else {
        alert("[ERRO]");
        times++;
        if(times == 3){
            alert("Número de tentativas esgotadas! \nPor favor, tente novamente mais tarde");
        }
    }
}