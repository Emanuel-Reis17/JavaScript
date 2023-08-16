function retornaHoras (data) {
    if(data && !(data instanceof Date)) {
        throw new Error("Valor errado!");
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

try {
    const horas = new Date();
    const tempo = retornaHoras(horas); 
    console.log(tempo);
} catch (err) {
    console.log("Ocorreu um erro");
    console.log(err);
} finally {
    console.log("Tenha um bom dia!");
}