const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // caminho absoluto em que o arquivo vai ser criado, volta uma pasta e nome do arquivo
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

/*
const pessoas = [ // array de objetos
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'José'},
    {nome: 'Madalena'}
];

const json = JSON.stringify(pessoas, '', 2); // converte o objeto para JSON. Outros parâmetros para formatar
escreve(caminhoArquivo, json);
*/

// Lendo o arquivo "json" e convertendo ele em objeto:

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

/*
const dadosArquivo = leArquivo(caminhoArquivo)
    .then(dados => console.log(dados));

console.log(dadosArquivo); // "Promise { <pending> }" porque sempre que se cria uma função async, ela retorna uma promise
*/

function renderizaDados(dados) {
    console.log(dados);
}

leArquivo(caminhoArquivo); 