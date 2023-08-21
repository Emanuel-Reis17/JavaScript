const value = null;
console.log(value && true && "Hello"); // returns the false value (value = null)

const value2 = 'false';
console.log(value || null || `` || value2); // returns the true value (value2 = 'false')