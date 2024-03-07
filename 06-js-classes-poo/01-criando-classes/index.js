// Classe é uma forma diferente de se escrever uma função construtora, mas elas fazem exatamente a mesma coisa

// criando uma classe:
class Pessoa {
    // método especial executado sempre que se cria uma classe. Ele pode não existir, mas se precisar de parâmetros ele é necessário:
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // método
        // com classes, a complexidade de se ter que criar um prototype e atrelar métodos a ele e etc. não existe, porque isso é feito automaticamente
        // os métodos são automaticamente linkados no prototype da classe
        console.log(`${this.nome} está falando.`);
    }
}

// instanciando uma classe / criando um objeto a partir dela:
const p1 = new Pessoa('Liam', 'Gallagher');
console.log(p1);
p1.falar(); // todo objeto pessoa vai usar o método falar no prototype de pessoa. Dessa forma, só há uma instância do método "falar" em memória

// * Fazendo a mesma coisa com função construtora:

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// método tem que ser colocado no prototype explicitamente:
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

p2 = new Pessoa('Noel', 'Gallagher');
console.log(p2); // p1 e p2 são idênticas, a única coisa que muda é o construtor (em p1 é a classe Pessoa e em p2 é a função construtora Pessoa2)