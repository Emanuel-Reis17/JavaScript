// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");
  for (let pessoas of json) {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = pessoas.nome;
    tr.appendChild(td);
    
    td = document.createElement("td");
    td.innerHTML = pessoas.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoas.salario;
    tr.appendChild(td); 
    
    table.appendChild(tr);   
  }
  document.querySelector(".container").appendChild(table);
}