// "funções imediatas" ou "funções autoinvocadas" (IIFE: Immediately Invoked Function Expression)

/*
// função criada para "fugir do escopo global"
function qualquerCoisa() {
    console.log('Todo o código');
}
qualquerCoisa(); // função executada imediatamente após ser criada

// mas, nesse caso essa função toca o escopo global
*/

// para criar uma função executada imediatamente quando criada, pode-se envolver ela em parênteses:

(function(idade, peso, altura) { // protegeu o código. Pode-se ter qualquer coisa no escopo global que não afetaria o código. Aí, escreve-se o código aqui dentro
    console.log('Vai ser executado imediatamente, e nada aqui dentro "toca" o escopo global.');

    const sobrenome = 'Beilfuss';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Matheus'));
    }

    falaNome();

    console.log(idade, peso, altura);

})(21, 64, 1.80); // pode-se passar argumentos para a função anônima

const nome = 'Beilfuss';