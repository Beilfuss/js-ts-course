function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) { // simula alguma coisa que demora
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caí no erro!');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise.');
            return;
        }, tempo);
    });
}

// Cadeia de promises:

/*
esperaAi('Fase 1', rand())
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na ', fase);
    })
    .catch(err => console.log(err));
*/

/*
Elas são executadas sequencialmente, como se fossem de forma síncrona. E, mesmo que resolvessem o callback hell,
o código ainda fica verboso. Para melhorar isso, pode-se usar "async" e "await".
Essas palavras permitem que se use promises dentro do corpo da função como se essas promises fossem de forma síncrona.
Como se fosse o "then", mas muito mais limpo.
*/

console.log();

async function executa() { // com "async" na função, pode-se usar "await" no corpo dela
    try {
        const fase1 = await esperaAi('Fase 1', rand()); // deixa síncrono: o código pausa aqui até que o valor seja resolvido ou rejeitado. O retorno é colocado em uma variável
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand()); // deixa síncrono: o código pausa aqui até que o valor seja resolvido ou rejeitado. O retorno é colocado em uma variável
        console.log(fase2);

        const pendingPromise = esperaAi('Pendente', 1000);
        console.log(pendingPromise); // sem o "async", dá pra ver que a promise está pendente. Isso porque não se usou nem then e nem "await" para esperar a execução da função. É como se ela tivesse ido para o servidor, começou a ser executada e quando se tentou ver o valor dela, ela não tinha o valor
    
        setTimeout(function() {
            console.log(pendingPromise);
        }, 1100); // 1,1 segundo depois, checa de novo para ver se a promise não retornou (pode-se verificar depois)

        // const erro = await esperaAi(12345, rand()); // Para pegar erros e não dar "UnhandledPromiseRejectionWarning", pode-se colocar um catch para cada chamada de promises ou englobar todas em um try catch
    
        const fase3 = await esperaAi('Fase 3', rand()); // deixa síncrono: o código pausa aqui até que o valor seja resolvido ou rejeitado. O retorno é colocado em uma variável
        console.log(fase3);
    
        console.log('Terminamos na ', fase3);
    } catch(err) { // reject vem para esse bloco. Executa até achar o erro
        console.log(err);
    }
    
}

executa(); // exato mesmo resultado do que usando "then" e "catch"

/*
Há situações em que usar then e catch é mais fácil, simples e intuitivo, e vão haver situações em que usar await é bem mais simples. 

Resumo:
"async" permite que se use "await" dentro de uma função para se esperar uma ou mais promises serem finalizadas.

Promises têm três estados:
- Pendente (pending): estado inicial, quando se manda ela executar. Está sendo executada e ainda não retornou o valor;
- Resolvida (fullfilled): representação de sucesso, quando foi resolvida;
- Rejeitada (rejected): promise rejeitada.
*/

// Pendente: promise inicia e já se chama o valor dela antes dela terminar. Isso ocorre quando não se usa o await para esperar ela terminar ou quando não se usa o then.

const teste = esperaAi('Qualquer coisa', 3000);
console.log(teste); // sem usar o then, chama o que tiver contendo a promise (nesse caso se vai ter uma promise pending: ela está executando ainda, mas já chamamos ela). Por isso se usa o then e catch ou await (na função que tiver "async")
