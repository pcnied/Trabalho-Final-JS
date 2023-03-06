const formulario = document.querySelector(".inputFlex")
const inputDescricao = document.querySelector("#inputDescricao");
const inputDetalhamento = document.querySelector("#inputDetalhamento");
let save = document.querySelector("#salvar");
let listaTarefas = document.querySelector("#listaTarefas");
let btnFechar = document.querySelector("#btnFechar");
let btnAtualizarTarefa = document.querySelector("#btnAtualizarTarefa");
let idTarefaEdicao = document.querySelector("#idTarefaEdicao");
let tarefaEdicao = document.querySelector("#tarefaEdicao");
let tarefaEdicaoDetalhamento = document.querySelector("#tarefaEdicaoDetalhamento");
const KEY_CODE_ENTER = 13;
const KEY_LOCAL_STORAGE = "listaDeTarefas";
let dbTarefas = [];

formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    const descricao = inputDescricao.value;
    const detalhamento = inputDetalhamento.value;
    
})




