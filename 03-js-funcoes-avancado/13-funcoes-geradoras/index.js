// Funções geradoras: "pausam" o código em um local. "Lazy evaluation", não entregam todos os valores de uma vez

function* geradora1() {
    // Código para retornar um valor
    yield 'Valor 1'; // funciona como "return"
    // Código para retornar um valor
    yield 'Valor 2';
    // Código para retornar um valor
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1); // Retorna o objeto gerador
console.log(g1.next()); // para ver um valor, é preciso usar "next()". Retorna um objeto com o primeiro valor:
console.log(g1.next().value); // próximo valor
console.log(g1.next().value); // último valor
console.log(g1.next()); // valor indefinido e "done" true, ou seja, acabaram os valores

/*

{ value: 'Valor 1', done: false }

- "value" é onde está o valor. Para ver ele, basta usar ".value";
- "done" indica se o gerador já terminou ou não (se ainda há valores para se obter);

*/

// iterando sobre a função geradora:
for (let valor of g1) { // faz iteração até o último valor (se a função geradora já não tiver sido esgotada)
    console.log(valor); 
}

console.log('');

// gerador infinito (perigoso), um contador:

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('');

// gerador que delega tarefa para outro gerador:

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // pede pra função geradora3 o 0, 1 e 2
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();


for (let valor of g4) {
    console.log(valor);
}

console.log('');

// Função geradora que retorna outras funções:

function* geradora5() {
    yield function() { // sistema com etapas em que cada função executa uma tarefa, em ordem
        console.log('Vim do y1');
    }

    // mais código

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

console.log('');

// Função geradora com return (faz a função geradora retornar um valor e parar por ali)

function* geradora6() {
    yield function() { 
        console.log('Vim do y1');
    }

    return function() {
        console.log('Vim do return');
    }

    // mais código

    yield function() { // "unreachable code":  esse código não vai ser utilizado por causa do return
        console.log('Vim do y2');
    }
}

const g6 = geradora6();
const function1 = g6.next().value;
const function2 = g6.next().value;
const function3 = g6.next().value;
function1();
function2();
// function3(); // is not a function, porque o return termina a função geradora