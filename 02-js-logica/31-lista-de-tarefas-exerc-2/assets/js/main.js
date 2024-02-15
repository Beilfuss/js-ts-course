const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); // adiciona classe
    botaoApagar.setAttribute('class', 'apagar'); // adiciona classe, mas com "setAttribute", que funciona com qualquer tipo de atributo
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // "replace" substitui a palavra "Apagar" para nada. "trim" remove espaços ao redor do texto
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // cria uma string do array em JSON
    localStorage.setItem('tarefas', tarefasJSON); // "tarefas" é o nome usado para recuperar esses valores depois, depois fala o que quer salvar. Nesse caso, só pode salvar strings
    // para ver o que está salvo em Local Storage no navegador, basta ir em Inspecionar elemento > Application > Local Storage > Site sendo usado.
    // pode-se usar o botão "Clear all" para apagar esse armazenamento local
    // esse localStorage é global do navegador, pode-se usar ele em qualquer lugar do código
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // getItem recupera o que foi salvo
    const listaDeTarefas = JSON.parse(tarefas); // convertendo a string de tarefas de volta para um array
    // JSON.stringfy converte um elemento JS para uma string no formato JSON
    // JSON.parse converte de volta para um objeto JS

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();