
//              0       1        2
const alunos = ['Luiz', 'Maria', 'João']; // arrays são indexados por elemento

console.log(alunos);

console.log(alunos[0]); // exibe apenas o primeiro elemento do array

alunos[0] = 'Matheus'; // edita uma posição do array
console.log(alunos);

alunos[3] = 'Luiza'; // se existe o índice, altera. Se não, acrescenta no array
console.log(alunos);

console.log(alunos.length); // retorna o tamanho do array (quantos elementos)

alunos[alunos.length] = 'Fábio'; // adiciona um elemento no final do array
alunos[alunos.length] = 'Lúcia';
console.log(alunos);

alunos.push('Otávio'); // função que adiciona um elemento no array
console.log(alunos);

alunos.unshift('Johny'); // adiciona no começo
console.log(alunos);

alunos.pop(); // remove o elemento final do array
console.log(alunos);

let removido = alunos.pop(); // remove o elemento final do array e armazena ele na variável
console.log(alunos);
console.log(removido);

removido = alunos.shift(); // remove o elemento inicial do array e armazena ele na variável
console.log(alunos);
console.log(removido);

delete alunos[1]; // deleta um elemento de posição específica no array. Essa posição fica vazia
console.log(alunos);
console.log(alunos[1]); // posição vazia fica como "undefined"

console.log(alunos[50]); // índice não existe, mas JS tem "undefined" como valor padrão para coisas que não existem

console.log(alunos);
console.log(alunos.slice(0, 3)); // exibe apenas os elementos 0, 1 e 2 do array
console.log(alunos.slice(0, -1)); // exibe todos menos 1, que é o último. Mesmo funcionamento do que com strings

console.log(typeof alunos); // em JS, um array é um objeto indexado
console.log(alunos instanceof Array); // alunos é uma instância de array? Método para saber se está trabalhando com arrays. Retorna true ou false

alunos[6] = 'teste';
console.log(alunos);