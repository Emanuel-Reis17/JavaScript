function contar() {
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#pas')
    let res = document.querySelector('p#res')
    
    if (ini.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] Uma área não foi preenchida, tente novamente!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando: '

        if (p <= 0) {
            alert('[ERR0] Passo Inválido! Considerado Passo 1')
            p = 1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}