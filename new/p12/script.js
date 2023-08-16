function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Errado! Ambos precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma(2, 1));
} catch(err) {
    console.log(err);
}