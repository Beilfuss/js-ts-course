function saudacao(nome) {
    return `Bom dia, ${nome}!`
} // criando função assim, não precisa de ";"

const variavel = saudacao('Matheus');
console.log(variavel); // "undefined" se não retorna nada

function soma(x = 1, y = 1) { // pode-se colocar valores padrão para os parâmetros
    const resultado = x + y;
    return resultado; // depois do return não executa mais nada
}

console.log(soma(2, 2));
console.log(soma(3, 2));

// console.log(resultado); // erro "resultado is not defined" porque não dá para acessar essa variável, ela está protegida pelo escopo da função

const resultado = soma(4, 5); // tudo bem redeclarar uma variável que está dentro de uma função (fora da função em que ela está), por causa do escopo
console.log(resultado); 

let result = soma();
console.log(result); // "NaN" porque não enviou parâmetros para a função. Se tiver valores padrão na função, retorna o resultado padrão

result = soma(4);
console.log(result); // Usa o 4 como o primeiro valor e como o segundo não foi enviado, usa o segundo valor padrão

const raiz = function (n) { // função anônima, vai dentro da variável
    return n ** 0.5;
}; // precisa usar ";" nesse caso porque se está usando o sinal de atribuição (=)

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz2 = (n) => { // arrow function, faz o mesmo que a anterior
    return n ** 0.5;
};

console.log(raiz2(9));

const raiz3 = n => n ** 0.5; // arrow function simplificada ao máximo

console.log(raiz3(9));