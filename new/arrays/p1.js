const clientes = ['Emanuel', 'Nalanda', 'Lucas']; // Creating a Array
clientes[3] = 'Julia'; // Add a new element
clientes.push('Emerson'); // Add a new element
clientes.unshift('Geovane'); // Add a new element at the beggining
clientes.pop(); // Delete element
clientes.shift(); // Delete first element
delete clientes[1]; // Delete the value of a element
console.log(clientes instanceof Array); // If it's a Array
console.log(clientes);