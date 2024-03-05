// Prototypes é a base do JS para trabalhar com POO

// Breve recapitulação:

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Método original: ' + this.nome + ' ' + this.sobrenome;
}

// Instância

const pessoa1 = new Pessoa('Liam', 'Gallagher'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Noel', 'Gallagher'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

/*
Ao criar esses objetos, ambos vão ter o mesmo método (nomeCompleto). Ou seja, ele se repete
e consome recursos. Um desperdício de recursos que gera problema de performance.
Pode-se tirar essa função de dentro do objeto e disponibilizar ela para todos, e os protótipos
ajudam com isso.
*/

/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
"Protótipo" é o termo usado para se referir ao que foi criado pela primeira vez, servindo de 
modelo ou molde para futuras produções.

Todos os tem uma referência interna para um protótipo (__proto__), que vem da propriedade "prototype"
da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto,
primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de
protótipos é usada até o topo (objeto null) até encontrar (ou não) tal membro.
*/

const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);

/*
Não há nada no objeto "data". Mas, como se consegue usar tantos métodos com ela?
A propriedade "__proto__" não está dentro desse objeto, ela fica, basicamente, no pai do objeto.
Ou seja, todos os objetos vão utilizar essa propriedade, que é uma propriedade só, em um lugar
só, e que não vai ser criada para todos os objetos.
Abrindo o __proto__, dá para ver todos os métodos de data. 

? De onde vem esse __proto__?

Toda vez que se cria um objeto vindo de uma função construtora, o JS automaticamente "linka" uma 
propriedade da função construtora chamada "prototype". Dando um "Pessoa.prototype" no console,
pode-se ver ela. Se fizer isso com date (Date.prototype), todas as funções de Date vão aparecer.
Sempre que se usar o prototype da função construtora, todos os objetos construídos com ela vão
ter o que foi adicionado também.
*/

Pessoa.prototype.olaMundo = 'Olá, Mundo!';

/* Agora, dando um "pessoa1.olaMundo" no navegador ira resultar em "Olá, Mundo!". Além disso,
"olaMundo" vai estar dentro de __proto__ (olhando Pessoa).
Se der um "Pessoa.prototype === pessoa1.__proto__" no console, vai dar true. "Prototype" é criado
automaticamente e linkado em cada objeto criado a partir da função construtora como "__proto__".
* Assim, quando se têm métodos que fazem a mesma coisa para todos os objetos, pode-se tirar esse
método e "jogar" ele dentro do __proto__.
*/

// Criando métodos no prototype de Pessoa:

Pessoa.prototype.nomeCompleto = function() {
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

/*
O método "nomeCompleto" adicionado ao prototype é sobrescrito pelo criado na função construtora.
Dando "pessoa1.nomeCompleto()", aparece o método original.
Isso porque o JS procura primeiro no próprio objeto, e depois o protótipo é utilizado.
Com o método no objeto comentado, o método adicionado ao prototype é utilizado.
Assim, melhora a performance do programa, porque todas as pessoas criadas não vão criar o mesmo
método, vão usar a referência do pai delas (protótipo).

A cadeia pode ser longa (onde JS busca os métodos):
data -> Date.prototype -> Object.prototype.
O pai de todos os objetos em JS é "Object.prototype".

Para pessoa:
pessoa1 -> Pessoa.prototype -> Object.prototype.

Pode-se aumentar essa cadeia com herança. Veremos isso a seguir.
*/
