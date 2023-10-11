function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') reject(new Error('[ERROR]'));
            resolve(msg);
        }, tempo);
    });
}

esperaAi("Conexão com a Base de Dados", rand(1, 3))
    .then(resposta => {
        
        console.log(resposta);
        return esperaAi("Buscando os dados da Base de Dados", rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(1556489, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Exibindo os dados na tela");
    })
    .catch(e => {
        console.log(e);
    });