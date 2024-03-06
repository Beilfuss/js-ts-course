// Herança na parte de protótipos

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // chama a função pai, passa this e os argumentos que a função pai recebe
    this.cor = cor; // atributo adicional de Camiseta, além dos que herda de Produto
}
Camiseta.prototype = Object.create(Produto.prototype); // cria um objeto vazio e setta o prototype desse objeto como sendo o do Produto
Camiseta.prototype.constructor = Camiseta; // explicitando que o construtor de Camiseta é Camiseta (senão fica Produto como construtor)

Camiseta.prototype.aumento = function(percentual) { // sobrescrevendo "aumento" para Camiseta
    this.preco = this.preco + (this.preco * (percentual/100));
}

const produto = new Produto('Copo', 5);
console.log(produto);

const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(100);
console.log(camiseta);

// Primeiro o JS olha dentro do objeto, depois no __proto__ do objeto, depois no __proto__ do objeto pai, depois no Object.prototype.

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, // não pode apagar ou sobrescrever essa propriedade

        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 10, 'Plático', 5);
caneca.estoque = '100'; // não vai funcionar
caneca.estoque = 100; // funciona (setter)
console.log(caneca);
console.log(caneca.estoque); // getter

/*
? Importante:

? Herança?
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode 
herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, 
a maioria das literaturas, incluindo as documentações (como MDN: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) 
citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, 
portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Mais especificamente no trecho: Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos 
adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype 
será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo "delegação" como mais 
adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.
*/