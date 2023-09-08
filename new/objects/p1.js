// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome, 
    this.sobrenome = sobrenome, 
    this.hello = () => console.log(`Olá ${this.nome} ${this.sobrenome}`)
}

const p1 = new Pessoa("Emanuel", "Reis");
console.log(p1.nome);
console.log(p1.hello());

// Factory Function
function newUser(username, email, pass) {
    return {
        username, 
        email, 
        pass, 
        profile() {
            console.log(`Name: ${this.username} 
            \nEmail: ${this.email} 
            \nPassword: ${this.pass}`);
        }
    }
}

const user = newUser("Emanuel_Reis", "emanuel@gmail.com", "@test244466666");
user1.profile(); 

// From ChatGPT
function newUser2(username, email, pass) {
    const user = {
        username, 
        email, 
        pass
    }
    user.profile = () => {
        console.log(`Name: ${username} \nEmail: ${email} \nPassword: ${pass}`);
    };

    return user;
}

const user1 = newUser2("Emanuel_Reis", "emanuel@gmail.com", "@test244466666");
user1.profile();
// user1.profile();
