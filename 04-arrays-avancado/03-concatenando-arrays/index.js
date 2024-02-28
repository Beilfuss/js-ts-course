const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1 + a2; // junta os valores como se fossem strings, não cria um novo array

// const a3 = a1.concat(a2); // método "concat". Nesse caso, concatena o a1 com o a2

// const a3 = a1.concat(a2, [7,8,9], 'Matheus'); // concatena o a2 com o a1 e adiciona mais valores

// const a3 = [...a1, ...a2]; // usando o "spread operator", "espalhando" o a1 e o a2 nos índices 0 e 1

const a3 = [...a1, 'Matheus', ...a2, ...[7, 8, 9]]; // pode-se adicionar valores como quiser

console.log(a3);

// rest e spread operators funcionam tanto para arrays quanto para objetos