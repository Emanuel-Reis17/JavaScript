function relogio() {
    function getTime(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
    }
    document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = "00:00:00";
            relogio.style.color = "black";
        }
        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.style.color = "black";
            iniciarTimer();
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.style.color = "red";
        }
    })
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;
    function iniciarTimer() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTime(segundos);
        }, 1000)
    }
}
relogio();