const multiplicacao = require('./modulo1'); // contém exatamente a função em "modulo1"

console.log(multiplicacao(2, 2));

const Cachorro = require('./modulo2');
const cachorro = new Cachorro('Rex');
cachorro.latir();