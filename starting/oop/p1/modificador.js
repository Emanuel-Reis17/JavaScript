function fnCapitalizar(vetor){
    let modificado = [];
    for(let i = 0; i <vetor.length; i++){
        let letraInicial = vetor[i].charAt(0).toUpperCase();
        let restoTexto = vetor[i].slice(1);
        let resultado = letraInicial + restoTexto;
        modificado[i] = resultado; 
    }
    return modificado;
}

function fnOrdenar(vetor){
    return vetor.sort(function(a, b){
        return a.localeCompare(b);
    });
}

function fnCaixaAlta(vetor){
    let modificado = [];
    for(let i = 0; i <vetor.length; i++){
        modificado[i] = vetor[i].toUpperCase();
    }
    return modificado;
}

export default {
    capitalizar: fnCapitalizar, 
    ordenar: fnOrdenar, 
    caixaAlta: fnCaixaAlta
};