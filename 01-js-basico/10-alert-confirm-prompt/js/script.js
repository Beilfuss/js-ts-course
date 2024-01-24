alert('Mensagem do alerta.'); // atalho para manipulação do objeto "window" do navegador: "window.alert('');"

window.confirm('Deseja realizar essa ação?'); // função que oferece botão "Cancelar" e "Ok": false ou true

window.prompt('Digite o seu nome:'); // função que oferece input. Por padrão, ele vem como string

// Funções podem ou não retornar um valor:
// alert retorna "undefined", ou seja, nada
// confirm retorna true ou false de acordo com o botão clicado pelo usuário

const confirma = confirm('Qualquer mensagem.'); // Forma de "capturar" o valor que a função retorna;

console.log(confirma);