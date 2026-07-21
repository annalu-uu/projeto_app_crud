"use strict";
const filmes = [];
const form = document.getElementById("formFilme");
const tabela = document.getElementById("listaFilmes");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const ano = Number(document.getElementById("ano").value);
    const diretor = document.getElementById("diretor").value;
    const duracao = Number(document.getElementById("duracao").value);
    const filme = {
        titulo,
        genero,
        ano,
        diretor,
        duracao
    };
    filmes.push(filme);
    atualizarTabela();
    form.reset();
});
function atualizarTabela() {
    tabela.innerHTML = "";
    filmes.forEach((filme, indice) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${filme.titulo}</td>
            <td>${filme.genero}</td>
            <td>${filme.ano}</td>
            <td>${filme.diretor}</td>
            <td>${filme.duracao} min</td>
            <td>
                <button onclick="removerFilme(${indice})">Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}
function removerFilme(indice) {
    filmes.splice(indice, 1);
    atualizarTabela();
}
// Torna a função acessível ao botão HTML
window.removerFilme = removerFilme;
//# sourceMappingURL=cadastro.js.map