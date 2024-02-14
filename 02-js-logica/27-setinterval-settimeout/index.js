function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// "setInterval" configura um intervalo de tempo em que uma função é executada
// passa a referência da função (chamando ela sem executar) e de quanto em quanto tempo se quer que isso seja executado
// pode-se passar uma função anônima também

const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000); 

// "setTimeout"
// em "clearInterval", passa o nome do intervalo que se quer parar. Nesse caso, "timer"

setTimeout(function() {
    clearInterval(timer); 
}, 3000);

setTimeout(function() {
    console.log('Olá, mundo!');
}, 4000);