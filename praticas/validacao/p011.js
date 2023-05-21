let user = {};
let times = false;

banco = function(){
    opção = prompt("Que tipo dec conta deseja abrir? \n [1] Conata Poupança \n[2] Conta Corrente ");
    let chances = false;

    while(chances < 2){
        if(opção == "1"){
            user.account = prompt("Digite seu CPF: ");
            if(user.account.value.length = 8){
                alert("Ótimo! aguarde a análise de sua conta.");
                break;
            } else {
                alert("[ERRO]");
                chances++;
            }
        } else if (opção == "2"){
            user.account = prompt("Digite seu CNPJ: ");
            alert("Ótimo! aguarde a análise de sua conta.");
        }
    }
}

while(times < 3){
    user.name = prompt("Qual é o seu nome? ");
    user.email = prompt("Digite seu email: ");
    user.password = prompt("Digite seu senha: ");
    
    if(user.name == "emanuel" && user.email == "emanuel@gmail.com" && user.password == "415263"){
        alert(`Dados cadastrados! Seja muito bem-vindo senhor ${user.name}`);
        banco();
        break;
    } else {
        alert("[ERRO]");
        times++;
        if(times == 3){
            alert("Número de tentativas esgotadas! \nPor favor, tente novamente mais tarde");
        }
    }
}