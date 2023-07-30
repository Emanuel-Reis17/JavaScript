import modificador from "./modificador.js";
import ingredientes from "./ingredientes.js";

let ingredientesOrdenados = modificador.ordenar(ingredientes);
console.log(ingredientesOrdenados);

// modificador.capitalizarNovo();
// console.log(ingredientes);
// console.log(typeof ingredientes);
// console.log(Array.isArray(ingredientes));
// console.log(ingredientes[0].nome);
// let ingredientes = ['mel','água', 'sal', 'mostarda'];
// let resultadoCapitalizado = modificador.capitalizar(ingredientes);
// let resultadoOrdenado = modificador.ordenar(resultadoCapitalizado);
// let resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

// console.log(resultadoCapitalizado);
// console.log(resultadoOrdenado);
// console.log(resultadoCaixaAlta);