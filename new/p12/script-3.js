function soma(x, y, z=0) {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        throw new Error('Um dos valores digitados não são números!');
    }
    return x + y + z;
}

try {
    const resultado = soma(5, 5, '2');
    console.log(`O resultado da soma foi ${resultado}`);
} catch (err) {
    console.log('Ocorreu um erro na soma. Por favor, tente novamente.');
    console.log(err);
} finally {
    console.log('Fim da execução.');
}