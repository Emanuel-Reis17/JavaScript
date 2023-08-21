const usuarioPontuacao = 1000;
// if (usuarioPontuacao >= 1000) {
//     console.log("Usuário VIP");
// } else {
//     console.log("Usuário Normal");  
// }
// (condition) ? true : false;
const nivelUsuarioPontuacao = usuarioPontuacao >= 1000 ? "Usuário VIP" : "Usuário Normal";
const corUsuario = "Golden";
const corPadrao = corUsuario || "Dark"; // 'Setando' 
console.log(nivelUsuarioPontuacao, corPadrao);