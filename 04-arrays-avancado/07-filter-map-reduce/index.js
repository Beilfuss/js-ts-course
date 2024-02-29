// Unindo filter, map e reduce

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares;
// -> Dobrar os valores;
// -> Reduzir (somar tudo).

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
// Versão mais longa:
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(acumulador, valor) {
    return acumulador + valor;
});
*/

// Versão com arrow functions:
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);

// [ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]
// 324