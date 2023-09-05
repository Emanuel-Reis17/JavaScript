// function Calculadora() {
//     this.display = document.querySelector(".display");
//     this.capturaClicks = () => {
//         document.addEventListener("click", event => {
//             const el = event.target;
//             if (el.classList.contains("btn-num")) this.addNum(el);
//             if (el.classList.contains("btn-clear")) this.clear();
//             if (el.classList.contains("btn-del")) this.del();
//             if (el.classList.contains("btn-equal")) this.realizaConta(el);
//         })
//     };
//     this.pressioneEnter = () => {
//         this.display.addEventListener("keypress", (e) => {
//             if (e.keyCode === 13) this.realizaConta();
//         })
//     }
//     this.realizaConta = () => {
//         let conta = this.display.value;
//         try {
//             conta = eval(conta);
//             if (!conta) {
//                 alert("Conta Inválida!");
//                 return;
//             }
//             this.display.value = conta;
//         } catch(er) {
//             if (!conta) {
//                 alert("Conta Inválida");
//                 return;
//             }
//         }
//     }
//     this.clear = () => this.display.value = "";
//     this.del = () => this.display.value = this.display.value.slice(0, -1);
//     this.addNum = el => {
//         this.display.value += el.innerText;
//         this.display.focus();
//     };
//     this.inicia = () => {
//         this.capturaClicks();
//         this.pressioneEnter();
//     };
// }
// const calculadora = new Calculadora();
// calculadora.inicia(); 

function Pessoa(nome=null, sobrenome=null, saldo=0.00) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.saldo = Number(saldo).toFixed(2);
    this.apresentaPessoa = () => console.log(`Olá senhor(a) ${this.nome + " " + this.sobrenome}`);
    this.calcularSaldo = () => console.log(`O seu saldo é de R$${this.saldo}`);
    this.transferenciaPix = (valor) => this.saldo = this.saldo - valor;
}

const p1 = new Pessoa("Emanuel", "Reis", 98);
const p2 = new Pessoa("Lucas", "Domingues", 8000);
console.log(p1, p2);