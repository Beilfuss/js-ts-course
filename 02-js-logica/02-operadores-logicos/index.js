/*
Operadores Lógicos - Usados para checar mais de uma comparação
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

let expressao = true && true && true;
console.log(expressao); // usando "E", todas as expressões precisam ser verdadeiras para retornar verdadeiro

expressao = true && false && true;
console.log(expressao); // false

expressao = true || false || false; // se qualquer expressão for verdadeira, retorna true
console.log(expressao);

expressao = false || false || false; // false
console.log(expressao);

// pequeno exemplo:
const usuario = 'Matheus';
const senha = '123456';
//                       True                   False
const vaiLogar = usuario === 'Matheus' && senha === '12345'; // daria false

console.log(!true); // nega a expressão, invertendo o valor
console.log(!!true); // nega duas vezes, invertendo o valor duas vezes e voltando ao que era
