// Funções relacionadas com as chaves do objeto. Pode-se "congelar" propriedades específicas de um objeto.
// defineProperty (define uma) - defineProperties (define várias)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { // this, nome da chave e um objeto
        enumerable: true, // faz o estoque ser um atributo visível
        value: estoque, // atribui o valor recebido em "estoque" para esse atributo
        writable: false, // valor do estoque não pode ser alterado
        configurable: false // se pode ou não apagar a chave ou reconfigurar ela (redefinindo essas configurações novamente)
    }); 
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome); // propriedade "nome" é pública
p1.estoque = 10; // não faz nada

console.log(p1);
console.log(Object.keys(p1)); // retorna um array com as chaves. Se "enumerable" fosse "false", não se veria "estoque". Mesma coisa usando o "S"

for (let chave in p1) { // itera sobre as chaves
    console.log(chave); // "estoque" não aparece se ele estiver como "false" no enumerable
}

console.log('');

// Usando defineProperties:

function Produto2(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    }); 

    Object.defineProperties(this, { // this e objeto com as chaves e objetos
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true    
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true    
        }
    });
}

const p2 = new Produto2('Camiseta', 20, 3);
console.log(p2);

// Muito mais verboso usar essas funções, mas elas oferecem muito mais controle

// defineProperty é para uma chave e o defineProperties é para várias chaves