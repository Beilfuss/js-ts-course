// "return" retorna um valor e a função termina

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 2));

/*
document.addEventListener('click', function() { // exemplo de uma função que não retorna nada, mas tem sua função
    document.body.style.backgroundColor = 'blue';
});
*/

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }; // retorna um objeto literal com nome e sobrenome
} // não precisa colocar o ": nome" ou ": sobrenome", porque como as variáveis recebidas têm o mesmo nome dos atributos do objeto, o JavaScript sabe para qual atributo vai cada variável

const p1 = criaPessoa('Matheus', 'Beilfuss');
const p2 = { // a variável p2 tem o mesmo conteúdo que p1
    nome: 'Matheus',
    sobrenome: 'Beilfuss'
}

console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(typeof p2);

console.log('');

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto; // esse retorno é da função em que ele está (falaResto)
    }
    return falaResto; // esse retorno é da função "comecoFrase". Ele retorna a função "falaResto" sem executar ela
}

const fala = falaFrase('Olá');
console.log(fala); // recebe uma função
const resto = fala('mundo!'); 
console.log(resto); // agora sim retorna uma string

console.log('');

// Exemplo em que funções aninhadas podem ser úteis

/*
function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n){
    return n * 4;
}
*/

// Em vez da forma acima:

/*
function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao
}
*/

// Ou ainda:

function criaMultiplicador(multiplicador) {
    // multiplicador está aqui
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2); // "duplica" vai usar o multiplicador 2
const triplica = criaMultiplicador(3); // "triplica" vai usar o multiplicador 3
const quadriplica = criaMultiplicador(4); // "quadriplica" vai usar o multiplicador 4

// essas funções nas variáveis são chamadas de "closures", pois fecham um escopo mesmo depois de ele já ter sido usado

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

/*
Pode-se retornar qualquer coisa em uma função: outra função, um objeto, valores primitivos (mais comum) etc.
Pode-se retornar, por exemplo, um "setInterval", e usá-lo em outra função para pausar ou parar aquela função (como no exercício anterior do relógio).
*/