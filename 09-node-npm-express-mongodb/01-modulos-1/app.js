// Importando tudo:
const modulo1 = require('./modulo1');

console.log(modulo1);
console.log();
console.log(modulo1.falaNome());
console.log();

// Importando só uma coisa:
const falaNome = require('./modulo1').falaNome;
// const falaNome = modulo1.falaNome; // pegando a função do módulo inteiro exportado

console.log(falaNome());
console.log();

// Importando várias coisas usando atribuição via desestruturação (destructuring assignment):

const { nome2, sobrenome2, falaNome2 } = require('./modulo1');
console.log(nome2, sobrenome2, falaNome2());
console.log();

// Importando uma classe usando destructuring:

const { Pessoa } = require('./modulo1'); // removendo a chave "Pessoa" de dentro do objeto do modulo1
const p1 = new Pessoa('Liam');
console.log(p1);

// Importando módulo padrão do Node:

const path = require('path');

// Importando módulo instalado com npm:

const axios = require('axios'); // não precisa falar o caminho, só o nome do módulo

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));

// Importando módulo sobrescrito:

/*
const { nome3, sobrenome3 } = require('./modulo1');

console.log(nome3, sobrenome3);
*/