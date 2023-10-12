/*Praticando*/
const rand = (max, min) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const connectDB = (msg, tempo) => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") reject(new Error("[ERROR]"));
            resolver(msg);
        }, tempo);
    });
}

// connectDB("Conectando a Base de Dados", rand(1, 8))
//     .then(res => {
//         console.log(res);
//         return connectDB("Preparando dados", rand(1, 8));
//     })
//     .then(res => {
//         console.log(res);
//         return connectDB(false, rand(1, 8));
//     })
//     .then(res => {
//         console.log(res);
//         return connectDB("Dados enviados com sucesso!", rand(1, 8));
//     })
//     .then(res => console.log(res))
//     .catch(e => console.log(e));
async function execute() {
    try {
        const fase1 = await connectDB("Conectando a Base de Dados...+", rand(1, 5));
        console.log(fase1);
        const fase2 = await connectDB("Preparando dados...", rand(1, 5));
        console.log(fase2);
        const fase3 = await connectDB("Enviando dados...", rand(1, 8));
        console.log(fase3);
        const fase4 = await connectDB("Dados enviados com sucesso!", rand(1, 5));
        console.log(fase4);
    } catch(e) {
        console.log(e);
    }
}
execute();