const pessoa = {
    nome: 'Matheus', // tirando "nome", ele fica como "undefined"
    sobrenome: 'Beilfuss',
    idade: 21,
    endereco : {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação:
// const { nome } = pessoa; // extraia do objeto o valor da chave "nome" e coloque na variável "nome"

// const {nome = 'Não existe', sobrenome, idade} = pessoa; // atribuindo um valor padrão para "nome". Isso também funciona com arrays

// const { nome: teste = 'Não existe', sobrenome, idade} = pessoa; // especifica a chave e muda o nome da variável "nome"

const {nome, sobrenome, endereco} = pessoa; // traz o objeto

console.log(nome, sobrenome, endereco);

const { endereco: {rua, numero} } = pessoa; // pega só rua e número

console.log(rua, numero);

const { endereco: {rua: r = 'Quinze', numero: n = 12345} } = pessoa; // mudando os nomes das variáveis e atribuindo valores padrão
console.log(r, n);

const { nome: name, ...resto } = pessoa; // pegando o resto com o operador "rest"
console.log(name, resto);