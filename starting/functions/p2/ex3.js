function validate(n){
    if (n < 16){
        console.log('Idade inválida')
    } else if  (n == 16 || n < 18){
        console.log('Estagiário')
    } else if ( n >= 18){
        console.log('APROVADO!')
    }
}

console.log(validate(26))