function criaCalculadora() {
    return {
        display: document.querySelector(".display"), 
        // btnClear: document.querySelector(".btn-clear"), 
        clearDisplay() {
            this.display.value = "";
        }, 
        pressioneEnter() {
            this.display.addEventListener("keyUp", (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }, 
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta Inválida!");
                    return;
                }
                this.display.value = conta;
            } catch(e) {
                if (!conta) {
                    alert("Conta Inválida!");
                    return;
                }
            }
        },
        inicia() {
            this.clickBotoes();
            this.pressioneEnter();
        }, 
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        clickBotoes() {
            document.addEventListener("click", (e) => {
                const el = e.target;
                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }
                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }
                if (el.classList.contains("btn-equal")) {
                    this.realizaConta();
                }
            })
        }, 
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();