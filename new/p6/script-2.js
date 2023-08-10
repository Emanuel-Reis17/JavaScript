// const data = new Date("2023-02-26 15:50:45");
// console.log("Dia:", data.getDate());
// console.log("Mês:", data.getMonth() + 1);
// console.log("Ano:", data.getFullYear());
// console.log("Horas:", data.getHours());
// console.log("Minutos:", data.getMinutes());
// console.log("Segundos:", data.getSeconds());
// console.log("Milisegundos:", data.getMilliseconds());
// console.log(data.toString());

// function formataHora (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//     const dia = formataHora(data.getDate());
//     const mes = formataHora(data.getMonth() + 1);
//     const ano = formataHora(data.getFullYear());
//     const horas = formataHora(data.getHours());
//     const minutos = formataHora(data.getMinutes());
//     const segundos = formataHora(data.getSeconds());
//     return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
// }

// const dataDia = new Date();
// let dia = dataDia.getDay();
// function diaSemana (numDia) {
//     const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
//     return diasSemana[numDia];
// }
// switch (dia) {
//     case 0:
//         dia = "Domingo";
//         break;
//     case 1:
//         dia = "Segunda-feira";
//         break;
//     case 2:
//         dia = "Terça-feira";
//         break;
//     case 3:
//         dia = "Quarta-feira";
//         break;
//     case 4:
//         dia = "Quinta-feira";
//         break;
//     case 5:
//         dia = "Sexta-feira";
//         break;
//     case 6:
//         dia = "Sábado";
//         break;
//     default:
//         dia = "Não identificado";
//         break;
// }

// const dataBrazil = formataData(dataDia);
// console.log(diaSemana(dia))
const data = new Date();
const hz = document.querySelector(".resposta");
hz.innerHTML = data.toLocaleDateString('pt-BR')
