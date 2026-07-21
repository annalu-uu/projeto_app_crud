interface Filme {
    titulo: string
    genero: string
    ano: number
    diretor: string
    duracao: number
}

const filmes: Filme[] = []

const form = document.getElementById("formFilme") as HTMLFormElement
const tabela = document.getElementById("listaFilmes") as HTMLTableSectionElement

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const titulo = (document.getElementById("titulo") as HTMLInputElement).value
    const genero = (document.getElementById("genero") as HTMLSelectElement).value
    const ano = Number((document.getElementById("ano") as HTMLInputElement).value)
    const diretor = (document.getElementById("diretor") as HTMLInputElement).value
    const duracao = Number((document.getElementById("duracao") as HTMLInputElement).value)

    const filme: Filme = {
        titulo,
        genero,
        ano,
        diretor,
        duracao
    };

    filmes.push(filme)

    atualizarTabela()

    form.reset()
});

function atualizarTabela(): void {

    tabela.innerHTML = ""

    filmes.forEach((filme, indice) => {

        const linha = document.createElement("tr")

        linha.innerHTML = `
            <td>${filme.titulo}</td>
            <td>${filme.genero}</td>
            <td>${filme.ano}</td>
            <td>${filme.diretor}</td>
            <td>${filme.duracao} min</td>
            <td>
                <button onclick="removerFilme(${indice})">Remover</button>
            </td>
        `

        tabela.appendChild(linha);
    })
}

function removerFilme(indice: number): void {
    filmes.splice(indice, 1)
    atualizarTabela()
}

// Torna a função acessível pro botão HTML
(window as any).removerFilme = removerFilme

