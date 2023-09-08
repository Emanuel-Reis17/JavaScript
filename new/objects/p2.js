function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        }, 
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Exibir chave
        value: estoque,     // Valor
        writable: true,     // Alterar chave
        configurable: true  // Configurável (Configurar novamente (reescrever))
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
for (let i in p1) {
    console.log(i);
}

function Product(name, color, price) {
    Object.defineProperty(this, 'name', {
        enumerable: true, 
        value: name, 
        writable: true, 
        configurable: true
    });
    Object.defineProperties(this, {
        color: {
            enumerable: true, 
            value: color, 
            writable: true, 
            configurable: false
        }, 
        price: {
            enumerable: true, 
            value: price, 
            writable: false, 
            configurable: false
        }
    });
}

const produto1 = new Product("Shirt", "red", 10);
console.log(p1);
p1.color = "green";
p1.name = "Shoes";
p1.price = 45;
console.log(p1);

for (let i in p1) {
    console.log(p1[i]);
}
