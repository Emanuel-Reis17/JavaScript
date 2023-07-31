class Produto {
    
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar(){
        let produto = this.lerDados();
        this.validaCampos(produto);
        if(this.validaCampos(produto)){
            this.adicionar(produto);
        }
        console.log(this.arrayProdutos);
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados(){
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.querySelector("#produto").value;
        produto.preco = document.querySelector("#preco").value;
        return produto;
    }

    validaCampos(produto){
        let msg = "";
        if(produto.nomeProduto == ""){
            msg += "Informe o nome do produto \n";
        }

        if(produto.preco == ""){
            msg += "Informe o preço do produto";
        }
        if(msg != ""){
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar(){
        alert("OK");
    }
}

let produto = new Produto();