/*
let nome = 'João'; // pode-se usar 'var', mas let é mais usado
console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
*/


let teste; // Declaração da variável
teste = 'Matheus'; // Inicializando a variável
console.log(teste);

teste = 'João';
console.log(teste);

// let teste; // SyntaxError: Identifier 'teste' has already been declared. Não se pode declarar o mesmo nome de variável duas vezes com "let"

// Não se pode criar variáveis com palavras reservadas, como "let console" ou "let if"

// Variáveis precisam ter nomes significativos, como "nomeCliente", por exemplo

// Não se pode começar o nome de uma variável com número, como "1nome", por exemplo. Números no meio ou no final pode

// Nomes de variáveis não podem conter espaços ou traços, usar a notação "camelCase":

let nomeCompletoCliente = 'Matheus Beilfuss';

// Variáveis são case-sensitive: letra maiúscula e minúscula fazem diferença. Essas variáveis são diferentes:

let nomeCliente = 'Matheus';
let nomecliente = 'João';

console.log(nomeCliente, nomecliente);

// Último valor atribuído à variável é o que ela vai conter

// Não usar "var", usar "let"