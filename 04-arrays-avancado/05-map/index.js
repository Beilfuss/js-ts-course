// Função map: altera valores do array e sempre retorna um array do mesmo tamanho que o original, mas com os valores alterados.
// O que funciona em filter, funciona em map: recebe uma função de callback; essa função recebe os parâmetros valor, índice e array; e map 
// não mexe no array original, retorna um novo array. Só muda o retorno final.
// Map "mapeia" os valores do array para os novos valores.
// A função de callback não retorna true ou false, retorna o novo valor para aquele índice.

// Exemplos

// * 1) Dobre os números:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
// Versão mais longa:
const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2;
});
*/

const numerosEmDobro = numeros.map(valor => valor * 2); // em arrow function

console.log(numerosEmDobro);

// * 2) Para cada elemento:
// Retorne apenas uma string com o nome
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [ // array com objetos de pessoas
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

/*
// Versão mais longa:
const nomes = pessoas.map(function(valor) {
    return valor.nome;
});
*/

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

/*
// Versão mais longa:
const idades = pessoas.map(function(obj) {
    delete obj.nome; // usando delete
    return obj;
});
*/

/*
// Versão mais longa:
const idades = pessoas.map(function(obj) {
    return { idade: obj.idade }; // retornando um objeto novo
});
*/

const idades = pessoas.map(obj => ({ idade: obj.idade })); // arrow function só funcionaria assim, com parênteses. Senão, as chaves do objeto se confundiriam com a chave da função da arrow function
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; // criando um novo objeto para não modificar o original
    newObj.id = indice;
    return newObj;
});

console.log(comIds);
// console.log(pessoas);