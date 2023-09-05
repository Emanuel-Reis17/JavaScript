const nomes = ["Emanuel", "Reis", "Melissa", "Ismael"]; // Array
nomes.splice(nomes.length, 0, "Emanuelly");         // .push();
nomes.splice(0, 0, "Gabriel");                      // .unshift();
let removidos = nomes.splice(-1, 1);                // .pop();
removidos = removidos.concat(nomes.splice(0, 1));   // .shift();
console.log(nomes, removidos);