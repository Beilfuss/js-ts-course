// * Argumentos são os valores que são enviados para os parâmetros de uma função (declarados juntos com ela)

function funcao() { 
    console.log('Oi');
    console.log(arguments);
    console.log(arguments[0])
}

funcao('Valor', 1, 2); // mesmo que um valor seja enviado e não recebido na função, ela executa normalmente em JS

console.log('');

/*
Ao definir uma função com a palavra "function" (apenas desse jeito), há uma palavra reservada dentro da função chamada "arguments".
A variável "arguments" recebe todos os parâmetros enviados em um objeto. Pode-se, então, iterar sobre eles. Exemplo abaixo.
*/

function somaParametros(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
    console.log(a, b, c);
}

somaParametros(1, 2, 3, 4, 5, 6, 7);

console.log('');

/*
Pode-se até colocar parâmetros na declaração da função, mas isso não muda a execução dela. Só muda que a, b e c recebem os três primeiros
valores da chamada da função.

- Pode-se ou não enviar argumentos para função e pode-se ou não criar os parâmetros;
- "arguments" recebe todos os argumentos criados, mas só para funções criadas com "function", não funciona em arrow function.
*/

somaParametros(1); // se não enviar todos os argumentos definidos, eles ficam como undefined

console.log('');

function somaAeB(a, b = 2, c = 4) { // valor padrão de b é 2, valor padrão de c é 4
    console.log(a + b + c);
}

somaAeB(2); // dá NaN, porque soma 2 com "undefined". Para resolver, define-se valores padrão para os parâmetros
somaAeB(2, 10); // usa o valor padrão de c
somaAeB(2, '', 20); // mesmo com o valor padrão, usa a string mesmo ela sendo "falsy"
somaAeB(2, null, 20); // "null" é assumido como 0
somaAeB(2, undefined, 20); // * única maneira de fazer a função considerar o valor padrão do parâmetro é usando undefined. Não é bom, o mais interessante é mudar a lógica
// somaAeB(2, , 20); // mandar o valor vazio dá um erro de sintaxe

// fazendo atribuição via desestruturação de objeto
function atrViaDesestrutucaoObjeto({ nome, sobrenome, idade }) { 
    console.log(nome, sobrenome, idade); // atribuição via desestruturação
}
let objeto = {nome: 'Matheus', sobrenome: 'Beilfuss', idade: 21};
atrViaDesestrutucaoObjeto(objeto); // aqui é preciso um objeto com as chaves "nome", "sobrenome" e "idade"

// é o mesmo com arrays:
function atrViaDesestrutucaoArray([valor1, valor2, valor3]) { 
    console.log(valor1, valor2, valor3); // atribuição via desestruturação
}
let array = ['Matheus', 'Beilfuss', 21];
atrViaDesestrutucaoArray(array); // aqui é preciso um objeto com as chaves "nome", "sobrenome" e "idade"

// função que faz contas:
function conta(operador, acumulador, ...numeros) { // o rest operator sempre tem que ser o último parâmetro da função
    console.log(operador, acumulador, numeros);

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50); // não precisa mandar um array para "números", pode-se usar o operador de resto ("...")
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);

const contaFunctionExpression = function(operador, acumulador, ...numeros) { // mesma função, mas como Function Expression

    console.log(arguments); // mesmo com rest operator, ainda tem os argumentos por causa da palavra function

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}; // aí precisa de ;

contaFunctionExpression('+', 0, 20, 30, 40, 50);

/*
const contaArrowFunction = (operador, acumulador, ...numeros) => {
    console.log(arguments); // não é o que estamos falando, é uma função do node. Não tem arguments em arrow function
};
contaArrowFunction(); 
*/

/*
A única diferença de arrow function para uma função normal é que a palavra "this" vai mudar o comportamento (veremos isso adiante).
*/

const funcaoRestArguments = (...args) => { // não é preciso usar "arguments", se usar o rest operator (...) tem o mesmo retorno
    console.log(args);
};

funcaoRestArguments(1, 2, 3, 4, 5);

/*
- rest operator funciona em qualquer tipo de função;
- sempre que precisar enviar parâmetros indeterminados para uma função, usar rest operator
*/

