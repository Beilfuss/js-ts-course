// Promises/Promessas

/*
Quando se trabalha na internet, às vezes se busca recursos dos quais não se tem noção exata de quando eles irão retornar.
Por exemplo: conecta-se em uma API e pede dados de um usuário; nesse caso, não se tem noção exata de quando os dados retornarão
ao código para se trabalhar com eles.
A solução antiga para isso seria a função de callback: pede um dado e passa como parâmetro uma função de callback que será
executada quando o dado estiver pronto. As promises vieram para resolver o "callback hell", uma função dentro da outra. O seu 
objetivo é fazer coisas que acontecem de forma assíncrona parecer acontecer de forma síncrona (em ordem).
Vejamos exemplos em código. Iremos usar o "setTimeout" (também usado quando se viu funções de callback) para simular algo
que demora e ver o que está acontecendo no código ("setTimeout" é a única forma que sabemos até agora para fazer isso).
*/

function rand(min, max) { // função que gera valores aleatórios entre 1000 e 3000 (para usar no setTimeout)
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min); // tempo entre 1 a 3 segundos
}

function esperaAi(msg, tempo) { // função que demora pra fazer algo
    // envolvendo o código em uma Promise:
    return new Promise((resolve, reject) => { // resolve: "esse código executou com sucesso, então resolve ele pra mim"; reject: "deu erro no código, rejeita isso pra mim"
        if (typeof msg !== 'string') reject('Bad value');

        setTimeout(() => {
            resolve(msg); // "resolve" a promise logo depois que o código do corpo da função foi executado (onde o callback seria chamado). Só pode mandar um parâmetro no resolve ou reject 
        }, tempo);    
    }); 
}

esperaAi('Frase 1: Conexão com o BD', rand(1, 3))
    .then(msg => { // sempre que se chama "resolve", "then()" é executado;
        console.log(msg); // recebe a mensagem e imprime ela
        return esperaAi('Frase 2: Buscando dados da base', rand(1, 3)); // como retorna uma promise, para pegar o dado dela é preciso encadear outro "then()"
    })
    .then(msg => {
        console.log(msg);
        // return msg + ' vai pro outro "then"'; // só retorna a mensagem com uma concatenação para outro "then". Também se pode fazer isso
        return esperaAi('Frase 3: Tratando os dados da base', rand(1, 3));
    })
    .then(msg => {
        console.log(msg);
    })
    .then(msg => {
        return esperaAi(123456789, rand(1, 3));
    })
    .then(() => {
        console.log('Último "then", apenas exemplo: exibindo dados na tela.');
    }) 
    .catch(err => { // sempre que se chama "reject", "catch()" é executado.
        console.log('Erro:', err);
    }); 

console.log('Isso é exibido antes de qualquer promise.'); // as promises são em paralelo: JS executa o código e mostra o resultado das promises quando elas terminarem (por isso é código assíncrono)

// Como fazer com que elas sejam executadas em ordem, mesmo que uma demore mais que a outra? Uma opção é usar callback:

/*
function esperaAi(msg, tempo, callback) { // função que demora pra fazer algo
    setTimeout(() => {
        console.log(msg);
        if (callback) callback(); // depois que uma terminar, chama a outra
    }, tempo);
}

// * uma chama a outra quando termina:
esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
});

// Mas, esse código pode ficar muito grande e não é a melhor solução.
// Criar as funções fora também fica gambiarra.

*/