// função de callback: funções executadas quando uma ação é finalizada

function rand(min = 1000, max = 3000) { // gera um número aleatório entre 1 e 3 segundos
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) { // esse parâmetro vai ser uma função de callback: uma função que pode ou não ser recebida
    setTimeout(function () {
        console.log('f1');
        if (callback) callback(); // se callback existe, executa callback
    }, rand()); // simulando uma coisa que demoraria na web (conexão numa base de dados, baixar algo etc.)
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback(); 
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback(); 
    }, rand());
}

/*
f1(function() {
    f2(function() {
        f3(function() { // esse é um exemplo de callback hell, com muitas funções callback
            console.log('Olá, mundo!'); // agora sim o console.log fica pro final e todas as funções são executadas em ordem
        });
    });
});
*/

// Para melhorar o código acima:

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Olá, mundo!');
}

/*
É a mesma coisa do que com as funções anônimas, mas menos confuso
*/

// console.log('Olá, mundo!'); // assim, console.log é a primeira função executada porque não tem timeout

/*
Para deixar a execução das funções na ordem, pode-se usar funções de callback
*/

/*
A própria função anônima dentro do setTimeout é uma função de callback. A solução para um código dentro do outro assim são as promises,
que veremos posteriormente. Elas deixam o código mais limpo e simples, sem precisar fazer callback dessa maneira.
*/