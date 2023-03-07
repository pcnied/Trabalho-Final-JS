const formulario = document.querySelector(".inputFlex")
const inputDescricao = document.querySelector("#inputDescricao");
const inputDetalhamento = document.querySelector("#inputDetalhamento");
const listaTarefas = document.querySelector("#listaTarefas");
let btnFechar = document.querySelector("#btnFechar");
let btnAtualizarTarefa = document.querySelector("#btnAtualizarTarefa");
let idTarefaEdicao = document.querySelector("#idTarefaEdicao");
let tarefaEdicao = document.querySelector("#tarefaEdicao");
let tarefaEdicaoDetalhamento = document.querySelector("#tarefaEdicaoDetalhamento");
const KEY_CODE_ENTER = 13;
const KEY_LOCAL_STORAGE = "listaDeTarefas";
let dbTarefas = [];
const emailLogado = sessionStorage.getItem("logado")
const dadosDoUsuario = obterUsuarioLogado()

formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    const descricao = inputDescricao.value;
    const detalhamento = inputDetalhamento.value;
    const recado = {
        id: gerarId(),
        descricao: descricao,
        detalhamento: detalhamento
    }
    dadosDoUsuario.recados.push(recado)
    atualizarLocalStorage(dadosDoUsuario)
    criarRecado(recado)
})

function obterUsuarioLogado() {
    const dadosDoUsuario = JSON.parse(localStorage.getItem(emailLogado))
    obterRecadosDoUsuario(dadosDoUsuario)
    return dadosDoUsuario
}

function obterRecadosDoUsuario(dadosDoUsuario) {
    listaTarefas.innerHTML = ""
    const recados = dadosDoUsuario.recados
    console.log(recados);
    for(const recado of recados) {
        criarRecado(recado)
    }
}

function gerarId(min = 1, max = 1000000) {
    let id = Math.floor(Math.random() * (max - min) + min);
    let idEncontrado = dadosDoUsuario.recados.findIndex(recado => recado.id === id);

  while (idEncontrado !== -1) {
    id = Math.floor(Math.random() * (max - min) + min);
    idEncontrado = dadosDoUsuario.recados.findIndex(recado => recado.id === id);
  }
  return id;
}

function criarRecado(recado) {
    listaTarefas.innerHTML += `
        <tr>
            <td>${recado.id}</td>
            <td>${recado.descricao}</td>
            <td>${recado.detalhamento}</td>
            <td>
                <button class="botaoExcluir" onclick="excluirRecado(${recado.id})" >Excluir</button>
                <button class="botaoEditar">Editar</button>
            </td>
        </tr>
    `
}

function excluirRecado(id) {
    const confirmacao = confirm('Tem certeza que quer excluir?')
    if(confirmacao) {
        // pegar recado com o id que está no parametro dessa função
        const indiceRecado = dadosDoUsuario.recados.findIndex(function (recado) {
            return recado.id == id
        })
        console.log(indiceRecado);
        dadosDoUsuario.recados.splice(indiceRecado, 1)
        atualizarLocalStorage(dadosDoUsuario)
        obterRecadosDoUsuario(dadosDoUsuario)
    }
}

function atualizarLocalStorage(dadosDoUsuario) {
    localStorage.setItem(dadosDoUsuario.email, JSON.stringify(dadosDoUsuario))
}




