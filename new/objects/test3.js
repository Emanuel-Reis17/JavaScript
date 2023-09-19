const trabalhar = {
    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.emprego}`);
    }
}
const distrair = {
    distrair() {
        console.log(`${this.nome} está se distraindo com ${this.hobby}`)
    }
}
const apresentar = {
    apresentar(){
        console.log(`Olá, meu nome é: ${this.nome}, tenho ${this.idade} anos e sou ${this.emprego}`);
    }
}
const descansar = {
    descansar ()  {
        console.log( `${this.nome} está descansando`);
    }
}
const pessoaPrototype = Object.assign({}, trabalhar, distrair, apresentar, descansar);
function criaPessoa(nome, idade, emprego, hobby) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        idade: {value: idade},
        emprego: {value: emprego}, 
        hobby: {value: hobby}
    });
}

const pessoa1 = criaPessoa("Emanuel", 18, "Programador", "mulheres");
console.log(pessoa1);
