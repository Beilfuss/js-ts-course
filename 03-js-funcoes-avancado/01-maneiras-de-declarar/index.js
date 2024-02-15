// Declaração clássica de função:

falaOi(); // não dá problema por causa do hoisting

function falaOi() { // declaração literal de função
    console.log('Oi');
}

/*
Nesse caso acontece o "Function Hoisting", que é elevação das funções e variáveis declaradas com "var" para o topo do JS.
Com isso, pode-se chamar esse tipo de função antes ou depois da declaração dela.
*/

// Funções em JS são "first-class objects": a função pode ser tratada como dado:
// Function expression:
const souUmDado = function () { // pode-se nomear a função aqui, mas nesse caso não é tão comum
    console.log('Sou um dado');
}

/*
Está se jogando uma função em uma variável, como se uma função fosse um dado.
Pode-se "executar a variável", como se fosse uma função.
Todas as funções (independentemente de tipo de declaração) são tratadas como objeto de primeira classe, como dado
*/

souUmDado();

/*
Isso é poderoso porque agora se pode jogar essa variável como parâmetro de outra função e fazer essa outra função executar essa função.
*/

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

/*
setInterval(function() { // está-se tratando a função como um dado porque se está passando ela como parâmetro para outra função
    console.log(teste);
}, 1000);
*/

// Arrow function: function expression curta

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// Esses tipos de declarações fazem diferença usando "this". Isso será visto posteriormente no curso

// Dentro de um objeto se pode ter uma função:

const obj = {
    falar: function() { // atributo falar tem uma função. Maneira clássica de se fazer isso
        console.log('Estou falando...');
    }
}

obj.falar();

const obj2 = {
    falar() { // atributo falar tem uma função. Maneira mais curta e moderna de se fazer isso
        console.log('Estou falando...');
    }
}

obj2.falar();