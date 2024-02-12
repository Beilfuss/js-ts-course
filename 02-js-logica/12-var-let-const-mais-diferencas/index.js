// no escopo global, elas fazem exatamente a mesma coisa:

let nome = 'Matheus';
var nome2 = 'Matheus';

// let nome = 'Liam'; // isso dá erro, porque o let não deixar redeclarar

var nome2 = 'Gallagher'; // já com o var tem como redeclarar

const verdadeira = true;

if (verdadeira) {
    let nome = 'Liam'; // aqui se está criando a variável novamente (dentro desse bloco), já que let tem escopo de bloco
    console.log(nome, nome2);
}

// let tem escopo de bloco: {...}
// var só tem escopo de função

if (verdadeira) {
    let nome = 'Liam';
    console.log(nome, nome2);

    if (verdadeira) { // bloco aninhado
        let nome = "Noel"; // mais uma variável diferente, dentro de seu próprio bloco
        console.log(nome, nome2); // a linguagem primeiro procura a variável no bloco. Se não achar, vai subindo até encontrar
    }
}

if (verdadeira) {
    let nome = 'Liam';
    var nome2 = 'Dave'; // redeclarada

    if (verdadeira) { 
        let nome = "Noel"; 
        var nome2 = 'Grohl'; // redeclarada
    }
}

console.log(nome, nome2);

var sobrenome = 'Novoselic';

function falaNome() {
    var nome = 'Krist'
    console.log(nome, sobrenome); // pode-se usar variáveis de fora, do "closure"

    if (verdadeira) {
        let nome = 'Kurt';
        console.log(sobrenome);
    }

    console.log(nome); // não usa a variável dentro do if. Com let, todos os blocos ficam "egoístas"
}

falaNome();
console.log(nome); // não usa a variável dentro da função

/* Diferença entre var e let:

- Único escopo que var vai respeitar é o de dentro da função, mas mesmo dentro da função, var não vai respeitar outros blocos (como ifs);
- Let respeita o escopo de todo bloco.

*/

// ** Sobre o "hoisting"

console.log(teste); // não dá erro, dá "undefined". Isso acontece com variáveis criadas com "var" e com funções criadas com "function"

var teste = 'teste'; // quando se cria variáveis acontece o hoisting (elevação): eleva a declaração de variáveis
// é como se no início do código fosse colocado "var teste;"

// isso não acontece com let. Dá o erro "is not defined"

// com funções criadas com "function", elas podem ser criadas e usadas ou usadas e depois criadas, porque também sofrem o hoisting