// Reduce é mais utilizada para reduzir o array a um único elemento. Isso porque reduce pode fazer o mesmo que filter e map, mas isso não é o ideal.
// Além dos parâmetros de filter e map (valor, índice e array), reduce tem o "acumulador" e o valor inicial dele (opcional).


// Exemplos:

// * 1)
// * Some todos os números (Reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) { // function(acumulador, valor, indice, array)
    acumulador += valor;
    // console.log(acumulador, valor);
    return acumulador; // sempre é preciso retornar algo
}, 0); // valor inicial do acumulador. Não mandando esse valor, o valor do acumulador é o primeiro elemento do array

console.log(total);

// Uso típico do Reduce

// * Retorne um array com os pares (Filter)

const pares = numeros.reduce(function(acumulador, valor) { 
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); // acumulador inicial é um array

console.log(pares);

// Poder-se ia fazer isso com o Filter, o que seria o ideal

// * Retorne um array com o dobro dos valores (Map)

const numerosEmDobro = numeros.reduce(function(acumulador, valor) { 
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(numerosEmDobro);

// Poder-se ia fazer isso com o Map, o que seria o ideal

// * 2) Retorne a pessoa mais velha:

const pessoas = [ // array com objetos de pessoas
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador; // retorna o objeto inteiro
    return valor; // retorna o valor se a idade do acumulador não for maior
}); // não passa um acumulador inicial porque se quer que o primeiro valor seja o primeiro elemento do array

// quem for mais velho termina sendo o acumulador

console.log(maisVelha);