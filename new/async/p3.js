const rand = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const esperaAi = (msg, tempo) => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            console.log(typeof msg === "string");
            if (typeof msg !== 'string') reject(new Error("[ERROR]"));
            resolver(`${msg} - Finalizada`);
        }, tempo);
    })
}

 async function executa() {
    try {
        const fase1 = await esperaAi("Fase 1", rand(1, 5));
        console.log(fase1)
        const fase2 = await esperaAi("Fase 2", rand(1, 5));
        console.log(fase2)
        const fase3 = await esperaAi(4545545454, rand(1, 5));
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();

/*
Pending -> Quando chamada antes do resultado final
Fullfilled -> Resolvida
Rejected -> Rejeitada
*/