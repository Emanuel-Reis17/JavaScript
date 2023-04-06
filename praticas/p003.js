var hora = new Date()
var tempo = hora.getHours()
console.log(tempo)
if (tempo < 12) {
    console.log('Bom dia!')
} else if (tempo <= 18) {
    console.log('Boa tarde!') 
} else {
    console.log('Boa noite')
}