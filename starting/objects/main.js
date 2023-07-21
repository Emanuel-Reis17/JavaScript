function validate(){
    const infor = {};
    infor.name = document.querySelector("#user");
    infor.key = document.querySelector("#password");

    if (infor.name.value == "" || infor.key.value == ""){
        alert("[ERRO]");
        delete infor.name;
        delete infor.key;
        return false;
    } else {
        alert("Dados OK!");
        return true;
    }
}    