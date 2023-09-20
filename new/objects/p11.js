const pessoas = [
    {id: 2, nome: "Emanuel"}, 
    {id: 3, nome: "Ismael"}, 
    {id: 1, nome: "Camile"}
];

const novasPessoas = new Map();
// console.log(novasPessoas);
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
    
}
// console.log(novasPessoas);
for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

// console.log(novasPessoas.get(2));
