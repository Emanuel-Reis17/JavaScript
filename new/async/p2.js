function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(false);
                return;
            }
            resolve(msg.toUpperCase() + ' - Finalizado');
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1, 5)), 
    esperaAi('Promise 2', rand(1, 5)), 
    esperaAi('Promise 3', rand(1, 5)), 
    esperaAi(1000, 1000 )
];

// Promise.all(promises)
// .then(resposta => console.log(resposta))
// .catch(e => console.log(e));


Promise.race(promises)
.then(resposta => console.log(resposta))
.catch(e => console.log(e));

// function baixarPagina() {
//     const emCache = false;
//     if (emCache) {
//         return Promise.resolve('Página em cache');
//     } else {
//         return esperaAi("Baixando a página", 3000);
//     }
// }
function baixarPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi("Baixando a página", 3000);
    }
}

baixarPagina()
    .then(resposta => console.log(resposta))
    .catch(e => console.log(`[ERROR] ~ ${e}`));