const multiplicacao = require('./modulo1'); // contém exatamente a função em "modulo1"
console.log(multiplicacao(2, 2));

/*
const Cachorro = require('./B/C/D/modulo2');
const cachorro = new Cachorro('Rex');
cachorro.latir();
*/

const Cachorro = require('./E/modulo3');
const cachorro = new Cachorro('Toby');
cachorro.latir();

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '..', '..')); // voltando duas pastas
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); // voltando duas e entrando em outras duas pastas 
console.log(path.resolve(__dirname, '.', 'arquivos', 'imagens')); // o "." não tem efeito, porque representa a pasta atual, em que se está