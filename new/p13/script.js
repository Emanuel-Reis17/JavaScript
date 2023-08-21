function rodaHora() {
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', { hour12: false });
}
const timer = setInterval(() => {
    console.log(rodaHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);