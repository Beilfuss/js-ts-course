/*
- Tanto as funções fábrica quanto as funções construtoras criam objetos;
- A diferença entre elas é que a função fábrica é uma função normal que retorna um objeto "voluntariamente". Já a função construtora faz muita
coisa automaticamente (cria o objeto, retorna o objeto etc.), e a única que se precisa fazer é criar ela;
- Na função construtora, o nome da função sempre precisa iniciar com letra maiúscula (isso é uma convenção), pois com ela é obrigatório usar 
a palavra "new";
- Ambas as funções (fábrica ou construtoras) têm o trabalho de ser um molde para gerar novos objetos.
*/

function Pessoa(nome, sobrenome) { // como se sabe que é uma função construtora, o corpo da função já vai ser o objeto criado
    
    // usando "this": atributos ou métodos públicos
    this.nome = nome; // criando uma chave no objeto
    this.sobrenome = sobrenome;
    
    // atributos ou métodos privados:
    const id = 123456; // atributo privado. Variável só disponível dentro do objeto
    const metodoInterno = () => { // método privado. Útil para operações internas (tipo validar um CPF)

    };

    this.metodo = function() {
        console.log(this.nome + ' chamou um método.');
    };
}

const p1 = new Pessoa('Liam', 'Gallagher'); // instanciação de um objeto "Pessoa"
const p2 = new Pessoa('Noel', 'Gallagher');

/*
- A palavra "new" cria um novo objeto vazio, faz o "this" apontar para o objeto vazio (p1) e retorna implicitamente o objeto para a variável,
não precisa usar return.
*/

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();