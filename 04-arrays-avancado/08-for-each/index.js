// forEach: forma diferente de iterar sobre arrays (disponível dentro de arrays)

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/*
for(let valor of a1) { // for iterando sobre os valores usando for of
    console.log(valor);
}
*/

// Iterando usando o forEach (mesma coisa que qualquer for faz):

a1.forEach(function(valor, indice, array) { // função de callback com parâmetros "valor", "indice" e "array"
    // console.log(valor, indice, array);
});

// Simulando um reduce com o forEach:

let total = 0;
a1.forEach(valor => { // usando arrow function
    total += valor;
});

console.log(total);

// Menos performático do que usar o reduce, mas é só um exemplo.