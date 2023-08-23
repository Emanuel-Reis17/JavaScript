function criapPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome, 
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        }, 
        peso: p, 
        altura: a
    }
}
const p1 = criapPessoa("Emanuel", "Reis");
const p2 = criapPessoa("Melissa", "Reis");
console.log(p1.fala("estudando JS"));
console.log(p2.fala("jogando Apex Legends"));
