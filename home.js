// let inputDescricao = document.querySelector('#inputDescricao');
// let inputDetalhamento = document.querySelector('#inputDetalhamento');
// let salvar = document.querySelector('#salvar');
// let listaTarefas = document.querySelector('#listaTarefas');
// let botaoFechar = document.querySelector('#botaoFechar');
// let botaoAtualizar = document.querySelector('#botaoAtualizar');
// let idTarefaEdicao = document.querySelector('#idTarefaEdicao');
// let tarefaEdicao = document.querySelector('#tarefaEdicao');
// let tarefaEdicaoDetalhamento = document.querySelector('#tarefaEdicaoDetalhamento');

// const KEY_CODE_ENTER = 13;
// const KEY_LOCAL_STORAGE = 'listaTarefas';
// let dbTarefas = [];

// obterTarefasLocalStorage();
// renderizarListaTarefaHtml();

// inputDescricao.addEventListener('keypress', (e) => {

//     if(e.keyCode == KEY_CODE_ENTER) {
//         let tarefa = {
//             nome: inputDescricao.value,
//             id: gerarId(),
//             detalhes: inputDetalhamento.value,
//         };
//         AdicionarTarefa(tarefa);
//     };
// });

// botaoFechar.addEventListener("click", (e) => {
//     alternarJanelaEdicao();
// });

// save.addEventListener("click", (e) => {
//     let tarefa = {
//         nome: inputDescricao.value,
//         id: gerarId(),
//         detalhes: inputDetalhamento.value,
//     };
//     AdicionarTarefa(tarefa);
// });

// botaoAtualizar.addEventListener("click", (e) => {
//     e.preventDefault();
//     let idTarefa = idTarefaEdicao.innerHTML.replace("#", "");
  
//     let tarefa = {
//         nome: tarefaEdicao.value,
//         id: idTarefa,
//         detalhes: tarefaEdicaoDetalhamento.value,
//     };

// };

// let tarefaAtual = document.getElementById(""+idTarefa+"")

//     if(tarefaAtual) {

//         const indiceTarefa = obterIndiceTarefaPorId(idTarefa);
//         dbTarefas[indiceTarefa] = tarefa;
//         salvarTarefasLocalStorage();

//         let li = CriarTagLI(tarefa);
//         listaTarefas.replaceChild(li, tarefaAtual);
//         alternarJanelaEdicao();
//     } else {
//         alert("Elemento HTMl não encontrado!")
//     };

// function gerarId() {
//     return Math.floor(Math.random() * 200);
// };

// function AdicionarTarefa(tarefa) {
//     dbTarefas.push(tarefa);
//     salvarTarefasLocalStorage();
//     renderizarListaTarefaHtml();
// };

// function CriarTagLI(tarefa) {
//     let li = document.createElement("li");
//     li.id = tarefa.id;

//     let spanId = document.createElement("span");
//     spanId.classList.add("idTarefa");
//     spanId.innerHTML = tarefa.id;


//     let span = document.createElement("span");
//     span.classList.add("textoTarefa");
//     span.innerHTML = tarefa.nome;

//     let spanDetail = document.createElement("span");
//     spanDetail.classList.add("detailTarefa");
//     spanDetail.innerHTML = tarefa.detalhes;


//     let editar = document.createElement("button");
//     editar.classList.add("acao");
//     editar.innerHTML = "Editar";
//     editar.setAttribute("onclick", "editar("+tarefa.id+")");
    

//     let excluir = document.createElement("button");
//     excluir.classList.add("acaoRed");
//     excluir.innerHTML = "Apagar";
//     excluir.setAttribute("onclick", "excluir("+tarefa.id+")");

//     li.appendChild(spanId);
//     li.appendChild(span);
//     li.appendChild(spanDetail);    
//     li.appendChild(editar);
//     li.appendChild(excluir);

//     return li;
// };

// function editar(idTarefa) {
//         let li = document.getElementById("" + idTarefa + "");
//         if(li) {

//             idTarefaEdicao.innerHTML = "#" + idTarefa;
//             // tarefaEdicao.value = li.innerText;
//             alternarJanelaEdicao();
//         } else {
//             alert("Elemento HTMl n達o encontrado!");
//         };
// };

// function excluir(idTarefa) {
//     let confirmacao = window.confirm("Tem certeza que quer excluir?");
//     if(confirmacao) {

//         const indiceTarefa = obterIndiceTarefaPorId(idTarefa);
        
//         dbTarefas.splice(indiceTarefa, 1);
//         salvarTarefasLocalStorage();

//         let li = document.getElementById("" + idTarefa + "");
//         if(li) {
//             listaTarefas.removeChild(li);
//         } else {
//             alert("Elemento HTMl n達o encontrado!");
//         };
//     };
// };

// function alternarJanelaEdicao() {
//     janelaEdicao.classList.toggle("abrir");
//     janelaEdicaoFundo.classList.toggle("abrir");
// };

// function renderizarListaTarefaHtml() {
//     listaTarefas.innerHTML = "";

//     for(let i = 0; i < dbTarefas.length; i++) {
//         let li = CriarTagLI(dbTarefas[i]);
//         listaTarefas.appendChild(li);
//     };

//     inputDesc.value = "";
//     inputDetail.value = "";
// };

// function obterIndiceTarefaPorId(idTarefa) {
//     const indiceTarefa = dbTarefas.findIndex(t => t.id == idTarefa);
//     if(indiceTarefa < 0) {
//         throw new Error("Id da tarefa n達o encontrado: ", idTarefa);
//     };
//     return indiceTarefa;
// };

// function salvarTarefasLocalStorage() {
//     localStorage.setItem("KEY_LOCAL_STORAGE", JSON.stringify(dbTarefas));
// };

// function obterTarefasLocalStorage() {
//     if(localStorage.getItem("KEY_LOCAL_STORAGE")) {
//         dbTarefas = JSON.parse(localStorage.getItem("KEY_LOCAL_STORAGE"));
//     };
// };

let inputDesc = document.querySelector("#inputDesc");
let inputDetail = document.querySelector("#inputDetail");
let save = document.querySelector("#save");
let listaTarefas = document.querySelector("#listaTarefas");
let btnFechar = document.querySelector("#btnFechar");
let btnAtualizarTarefa = document.querySelector("#btnAtualizarTarefa");
let idTarefaEdicao = document.querySelector("#idTarefaEdicao");
let tarefaEdicao = document.querySelector("#tarefaEdicao");
let tarefaEdicaoDetalhamento = document.querySelector("#tarefaEdicaoDetalhamento");
const KEY_CODE_ENTER = 13;
const KEY_LOCAL_STORAGE = "listaDeTarefas";
let dbTarefas = [];

obterTarefasLocalStorage();
renderizarListaTarefaHtml();

inputDesc.addEventListener("keypress", (e) => {

    if(e.keyCode == KEY_CODE_ENTER) {
        let tarefa = {
            nome: inputDesc.value,
            id: gerarId(),
            detalhes: inputDetail.value,
        };
        AdicionarTarefa(tarefa);
    };
});

btnFechar.addEventListener("click", (e) => {
    alternarJanelaEdicao();
});

save.addEventListener("click", (e) => {
    let tarefa = {
        nome: inputDesc.value,
        id: gerarId(),
        detalhes: inputDetail.value,
    };
    AdicionarTarefa(tarefa);
});

btnAtualizarTarefa.addEventListener("click", (e) => {
    e.preventDefault();
    let idTarefa = idTarefaEdicao.innerHTML.replace("#", "");
    // let idTarefaDetalhamento = idTarefaEdicao.innerHTML.replace("#", "");

    let tarefa = {
        nome: tarefaEdicao.value,
        id: idTarefa,
        detalhes: tarefaEdicaoDetalhamento.value,
    };

    let tarefaAtual = document.getElementById(""+idTarefa+"");

    if(tarefaAtual) {

        const indiceTarefa = obterIndiceTarefaPorId(idTarefa);
        dbTarefas[indiceTarefa] = tarefa;
        salvarTarefasLocalStorage();

        let li = CriarTagLI(tarefa);
        listaTarefas.replaceChild(li, tarefaAtual);
        alternarJanelaEdicao();
    } else {
        alert("Elemento HTMl n達o encontrado!")
    };
});

function gerarId() {
    return Math.floor(Math.random() * 200);
};

function AdicionarTarefa(tarefa) {
    dbTarefas.push(tarefa);
    salvarTarefasLocalStorage();
    renderizarListaTarefaHtml();
};

function CriarTagLI(tarefa) {
    let li = document.createElement("li");
    li.id = tarefa.id;

    let spanId = document.createElement("span");
    spanId.classList.add("idTarefa");
    spanId.innerHTML = tarefa.id;


    let span = document.createElement("span");
    span.classList.add("textoTarefa");
    span.innerHTML = tarefa.nome;

    let spanDetail = document.createElement("span");
    spanDetail.classList.add("detailTarefa");
    spanDetail.innerHTML = tarefa.detalhes;


    let editar = document.createElement("button");
    editar.classList.add("acao");
    editar.innerHTML = "Editar";
    editar.setAttribute("onclick", "editar("+tarefa.id+")");
    

    let excluir = document.createElement("button");
    excluir.classList.add("acaoRed");
    excluir.innerHTML = "Apagar";
    excluir.setAttribute("onclick", "excluir("+tarefa.id+")");

    li.appendChild(spanId);
    li.appendChild(span);
    li.appendChild(spanDetail);    
    li.appendChild(editar);
    li.appendChild(excluir);

    return li;
};

function editar(idTarefa) {
        let li = document.getElementById("" + idTarefa + "");
        if(li) {

            idTarefaEdicao.innerHTML = "#" + idTarefa;
            // tarefaEdicao.value = li.innerText;
            alternarJanelaEdicao();
        } else {
            alert("Elemento HTMl n達o encontrado!");
        };
};

function excluir(idTarefa) {
    let confirmacao = window.confirm("Tem certeza que quer excluir?");
    if(confirmacao) {

        const indiceTarefa = obterIndiceTarefaPorId(idTarefa);
        
        dbTarefas.splice(indiceTarefa, 1);
        salvarTarefasLocalStorage();

        let li = document.getElementById("" + idTarefa + "");
        if(li) {
            listaTarefas.removeChild(li);
        } else {
            alert("Elemento HTMl n達o encontrado!");
        };
    };
};

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle("abrir");
    janelaEdicaoFundo.classList.toggle("abrir");
};

function renderizarListaTarefaHtml() {
    listaTarefas.innerHTML = "";

    for(let i = 0; i < dbTarefas.length; i++) {
        let li = CriarTagLI(dbTarefas[i]);
        listaTarefas.appendChild(li);
    };

    inputDesc.value = "";
    inputDetail.value = "";
};

function obterIndiceTarefaPorId(idTarefa) {
    const indiceTarefa = dbTarefas.findIndex(t => t.id == idTarefa);
    if(indiceTarefa < 0) {
        throw new Error("Id da tarefa n達o encontrado: ", idTarefa);
    };
    return indiceTarefa;
};

function salvarTarefasLocalStorage() {
    localStorage.setItem("KEY_LOCAL_STORAGE", JSON.stringify(dbTarefas));
};

function obterTarefasLocalStorage() {
    if(localStorage.getItem("KEY_LOCAL_STORAGE")) {
        dbTarefas = JSON.parse(localStorage.getItem("KEY_LOCAL_STORAGE"));
    };
};

