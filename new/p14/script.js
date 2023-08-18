const inputTarefa = document.querySelector(".nova-tarefa");
const btnTarefa = document.querySelector(".add-tarefa");
const tarefas = document.querySelector(".tarefas");

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

inputTarefa.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function apagarInput(li) {
    li.innerHtml += " ";
    const button = document.createElement("button");
    button.innerHTML = "Apagar";
    button.setAttribute("class", "apagar");
    button.setAttribute("title", "Apagar tarefa");
    li.appendChild(button);
}

function criaLi() {
    const li = document.createElement("li");
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    apagarInput(li);
}

btnTarefa, addEventListener("click", (e) => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("apagar"))
        el.parentElement.remove();
})