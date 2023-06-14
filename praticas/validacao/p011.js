let times = false;

function banco(){
    opção = prompt("Que tipo dec conta deseja abrir? \n[1] Conta Poupança \n[2] Conta Corrente ");
    let chances = false;

    while(chances < 2){
        if(opção == "1"){
            account = prompt("Digite seu CPF: ");
            if(account.length == 8){
                alert("Ótimo! aguarde a análise de sua conta.");
                break;
            } else {
                alert("[ERRO]");
                chances++;
                if(chances == 2){
                    alert("[ERRO] Número de tentativas esgotadas! Por favor, tente novamente.");
                    banco();
                }
            }
        } else if (opção == "2"){
            account = prompt("Digite seu CNPJ: ");
            if(account.length == 8){
                alert("Ótimo! aguarde a análise de sua conta.");
                break;
            } else {
                alert("[ERRO]");
                chances++;
                if(chances == 2){
                    alert("[ERRO] Número de tentativas esgotadas! Por favor, tente novamente.");
                    banco();
                }
            }
        }
    }
}

while(times < 3){
    username = prompt("Qual é o seu nome? ");
    email = prompt("Digite seu email: ");
    password = prompt("Digite seu senha: ");
    
    if(username == "emanuel" && email == "emanuel@gmail.com" && password == "415263"){
        alert(`Dados cadastrados! Seja muito bem-vindo senhor ${username}`);
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