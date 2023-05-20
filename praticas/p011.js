let myname = "Emanuel";
let email = "emanuel@gmail.com";
let senha = "415263";
let vali = false;

while (vali < 3){ 
    if(myname == "Emanuel" && email == "emanuel@gmail.com" && senha == "415263"){
        console.log(`Bem-vindo ao sistema ${myname}!`);
        break;
    } else {
        console.log("[ERRO] Dados incorretos! Por favor, tente novamente.")
        vali++;
        if(vali == 3){
            console.log("Números de tentativas esgotadas");
        }
    }
}