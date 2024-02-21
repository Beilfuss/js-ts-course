// Factory Functions são funções que retornam objetos

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto(){ // getter
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(nomeCompleto) { // setter
            nomeCompleto = nomeCompleto.split(' '); // separa a string em cada espaço e coloca ela em um vetor
            this.nome = nomeCompleto.shift(); // retorna o primeiro valor do vetor pra variável e remove o primeiro valor do array
            this.sobrenome = nomeCompleto.join(' '); // junta os valores sobrando no array
        },

        fala: function(assunto) { // não precisa dos ":" e da palavra "function"
            return `${this.nome} está falando sobre ${assunto}.`; // usando "nome" sem "this", está usando o parâmetro recebido pela função (mais performático). Usando o objeto seria com this: "this.nome"
        },

        altura,
        peso,

        get imc() { // faz o imc "fingir" ser um atributo da classe. Com "get" ele se tornou um "getter"
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

/*
O "this" sempre vai se referir à pessoa que chamou o que se estiver executando. Nesse caso específico, está-se executando o método "fala", e quem
chamou "fala" foi p1; logo, "this" é p1. É a mesma coisa que dizer "p1.nome". Em resumo: quem chama (o objeto que chama) é o "this".
*/

const p1 = criaPessoa('Matheus', 'Beilfuss', 1.8, 64);
console.log(p1);
console.log(p1.fala('JavaScript')); // utilizando o método "fala" do objeto
p1.imc = 29; // isso não funciona, porque o getter não deixa. Não há um setter para isso
console.log(p1.imc); // com "get" não precisa de parênteses. Ele age como se fosse um atributo, se torna um "getter"
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Noel Thomas David Gallagher'; // usando o setter "nomeCompleto" para p1
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('nada'));

console.log('');

const p2 = criaPessoa('Liam', 'Gallagher', 1.78, 70);
console.log(p2.fala('Rock')); // "this" se refere ao objeto que está chamando ele
console.log(p2.imc);

/*
Constructor Functions fazem o mesmo que uma Factory Functions, mas as Constructors estão mais relacionadas com OO.
O desenvolvedor escolhe o que for mais adequado.
*/

