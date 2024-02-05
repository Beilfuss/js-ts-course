/*
&& -> false && true -> false
|| -> true || false -> true 

Falsy values (o que a linguagem considera como falso):

- false (literal);
- 0;
- '', "", `` (string vazia);
- null/Undefined;
- NaN.

*/

console.log('Matheus' && 0 && 'Maria'); // quando encontra o valor falso, retorna ele 
console.log('Matheus' && true && 'Maria'); // se não encontra nada falso, checa todos e retorna o valor da última

console.log('Matheus' && 'Maria'); // verifica que é tudo verdadeira e retorna o último valor
console.log('Matheus' && '' && 'Maria'); // verifica que '' é falso e retorna ele
console.log('Matheus' && NaN && 'Maria'); // verifica que NaN é falso e retorna ele

function falaOi () {
    return 'Oi';
}

let vaiExecutar; // inicializa como "undefined" e, por isso, é considerada como "false"

console.log(vaiExecutar && falaOi()); // avaliação de curto-circuito: checa se a variável é verdadeira e, se for, executa a função

vaiExecutar = 'Matheus'; // considerado como true

console.log(vaiExecutar && falaOi()); // dá certo

// Sem estrutura condicional se conseguiu fazer uma condição para executar ou não uma função

console.log(0 || false || null || 'Matheus' || true); // exibe o nome porque o OR precisa de apenas uma expressão verdadeira para retornar o valor verdadeiro

// exemplo: usuário pode selecionar uma cor, mas o padrão é preto
let corUsuario = null;
let corPadrao = corUsuario || 'preto'; // se "corUsuario" não for vazia, considera ela

console.log(corPadrao); // considera 'preto' como verdadeiro e utiliza ele

corUsuario = 'vermelho';
corPadrao = corUsuario || 'preto'; 

console.log(corPadrao); // retorna o valor seleciona pelo usuário, porque é o primeiro valor verdadeiro

// mais um exemplo:
let a = 0;
let b = null;
let c = 'false';
let d = false;
let e = NaN;

console.log(a || b || c || d || e); // exibe o 'false' dentro de aspas porque é uma string, o que é verdadeiro

a = 0;
b = null;
c = false;
d = false;
e = NaN;

console.log(a || b || c || d || e); // se todas forem falsas, retorna o último valor falso