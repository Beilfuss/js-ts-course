function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) * min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caí no erro!'); // o motivo de rejeitar uma promise pode ser qualquer outro (como um erro)
                return; // para parar a função de executar logo após o reject, é preciso dar um return
            };    

            resolve(msg.toUpperCase() + ' - Passei na promise.');
            return; // para parar a função de executar logo após o resolve, é preciso dar um return. Mas, esse aqui é redundante porque não tem mais código
        }, tempo);
    });
}

/*
Métodos a serem vistos:
- Promise.all;
- Promise.race;
- Promise.resolve; (entrega uma promessa já resolvida)
- Promise.reject; (entrega uma promessa já rejeitada)
*/

// * Promise.all();
/* 
Promise.all: passa um array com promises ou valores já resolvidos e ele entrega uma promessa só com os valores dentro de um array.
Promise.all: retorna um array com a solução de todas as promessas.
Exemplo abaixo:
*/

let promises = [
    'Primeiro valor', // pode-se enviar valores quaisquer ou promessas
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000), // se uma promise der erro, vai rejeitar todas
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor) { // "resolva todas essas promises e retorne apenas um 'then' com todos os valores"
        console.log(valor);
    }).catch(function(erro) {
        console.log(erro);
    });

/*
Array retornado com todos os valores:

1) ['Primeiro valor', 'Promise 1', 'Promise 2', 'Promise 3', 'Outro valor']
2) ['Primeiro valor', 'PROMISE 1 - Passei na promise.', 'PROMISE 2 - Passei na promise.', 'PROMISE 3 - Passei na promise.', 'Outro valor']

Nesse caso, uma promise não depende do valor da outra. "Promise.all" resolve todas as promises do array e coloca todos os valores resolvidos em um array.
*/

console.log();

// * Promise.race();

promises = [
    // 'Primeiro valor', // valores assim serão retornados sempre se usar o race, porque são como uma promise já resolvida
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi(1000, 1000), // se uma promise der erro, vai rejeitar todas
];

Promise.race(promises)
    .then(function(valor) { 
        console.log(valor);
    }).catch(function(erro) {
        console.log(erro);
    });

/*
"Promise.race": "pega todas essas promises e a primeira que resolver, me entrega o valor".
Nesse caso, a promise retornada é a 2 ("PROMISE 2 - Passei na promise.""), porque ela é a mais rápida (dura só 500ms).
Apesar do race entregar a promise que resolveu mais rápido, as outras continuam executando (por isso o código continua um pouco mesmo já tendo entregue uma promise).
Se a primeira promise que resolver não rejeitar, ele entrega o valor. Mas, se a primeira que resolver rejeitar, ele vai entregar o erro (caindo no catch para tratar o erro).
*/

console.log();

// * Promise.resolve() / Promise.reject();

// Exemplo:
function baixaPagina() {
    const emCache = true; // página com cache, entrega na hora
    // const emCache = false; // página sem cache

    if(emCache) { // Se a página já estiver em cache, entrega a promise resolvida, já que não é preciso baixar a página, ela já está em cache.
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache'); // faz a mesma coisa que o Promise.resolve, mas cai no "catch" em vez de no "then"
    } else {
        return esperaAi('Baixei a página', 3000); // se não estiver em cache, baixa a página
    }
}

/*
Essa função claramente espera que o que seja retornado dela é uma promessa. Nesse caso, se já tiver os dados em mãos (página em cache), não é 
necessário esperar, e aí se pode entregar a promise já resolvida.
Se tiver que baixar, vai poder utilizar then e catch também porque se está retornando "esperaAi", que retorna uma promessa.
*/

baixaPagina() // ou cai numa promessa resolvida e já entrega ela de cara ou cai numa promessa que vai ser executada e entregar o valor depois de ser executada
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(err => console.log('ERRO:', err));



/* Resumo: 
- Promise.all: tenta resolver todas. Se uma der errado, rejeita todas;
- Promise.race: tenta resolver uma a uma e a primeira que resolver, ele entrega. Se der errado, retorna o erro;
- Promise.resolve: entrega uma promise resolvida logo de cara;
- Promise.reject: entrega uma promise rejeitada logo de cara.
*/