// Filter, map e reduce são as funções mais importantes para array em JS
// Filter filtra o array;
// Map modifica o array;
// Reduce "reduz" o array.
// As outras vão ser explicadas em suas aulas. Pode-se juntar as três e usar as três ao mesmo tempo.
// Filter filtra o array, mas não edita o array original, ela cria um novo array e retorna os valores filtrados.
// Filter sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Exemplos:

// * 1) Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* // Versão mais comprida:
function callbackFilter(valor, indice, array) { // essa função de callback do filter recebe o valor do elemento, índice que está sendo iterado, o array completo
    if (valor > 10) {
        return true; // * função filter requer que retorne um booleano: True para o elemento ser retornado e False para não
    } else {
        return false;
    }
}
*/

/* // Versão com função clássica (usada quando a função é usada em mais de um lugar no código)
function callbackFilter(valor) { // pegando só o valor
    return valor > 10; // já retorna true ou false
}

const numerosFiltrados = numeros.filter(callbackFilter); // ([função de callback que itera sobre cada elemento]). Filter que executa ela
*/

/*
const numerosFiltrados = numeros.filter((valor, indice, array) => { // usando arrow function
    console.log(valor, indice, array); // mostrando tudo o que a função pode receber
    return valor > 10;
});
*/

const numerosFiltrados = numeros.filter(valor => valor > 10); // arrow function em uma linha */

console.log(numerosFiltrados);

// * 2)
// Retorne as pessoas que têm o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const pessoas = [ // array com objetos de pessoas
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 27 }
];

/*
// Forma longa:
const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length >= 5;
});
*/

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);