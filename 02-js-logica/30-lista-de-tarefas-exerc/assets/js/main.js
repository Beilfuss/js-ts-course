const inputTarefas = document.querySelector('#input-tarefas');
const botaoAdd = document.querySelector('#button-adicionar');
const listaTarefas = document.querySelector('#lista-tarefas');

let count = 0;

document.addEventListener('click', function(event) {
    event.preventDefault();

    const element = event.target;

    if (element.id === 'button-adicionar') {
        criaTarefa(inputTarefas.value);
    }

    if ((element.id).includes("botao-")) {
        const numeroBotao = (element.id).slice(6,);
        const tarefaRemovida = document.getElementById(`tarefa-${numeroBotao}`);
        tarefaRemovida.remove();
    }
});

function criaTarefa(tarefaText) {

    const topico = document.createElement('li');
    const topicoText = document.createTextNode(tarefaText);
    topico.setAttribute('id', `tarefa-${count}`);

    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'button-delete');
    botaoApagar.setAttribute('id', `botao-${count}`);
    const botaoText = document.createTextNode('Apagar');
    botaoApagar.appendChild(botaoText);

    topico.appendChild(topicoText);
    topico.appendChild(botaoApagar);
    listaTarefas.appendChild(topico);

    count++;
}