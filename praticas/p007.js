let number = 5
if (number == 0){
    console.log('~[ERRO] Número Inváldo! Por favor, digite outro número')
} else {
    let c = 1
    while (c <= 10) {
        console.log(`${number} x ${c} = ${number*c}`)
        c++
    }
}