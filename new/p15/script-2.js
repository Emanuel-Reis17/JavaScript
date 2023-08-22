function returnFunction() {
    const nome = "Emanuel";
    return function() {
        return nome;
    }
}

const exec = returnFunction();
console.dir(exec);