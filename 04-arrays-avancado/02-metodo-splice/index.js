//             -5      -4      -3          -2          -1       índice negativo é o tamanho do array (ou string) menos o valor
//              0       1       2           3           4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice([índice em que se quer começar a mexer], [quantos elementos se quer remover], [elementos para adicionar]);

// mesmo da função pop:
// const removidos = nomes.splice(-1, 1); // remove, começando do -1, 1 elemento

// const removidos = nomes.splice(3, 2); // remove, começando do índice 3, 2 elementos
// const removidos = nomes.splice(-3, 2); // remove, começando do -3, 2 elementos
const removidos = nomes.splice(-3, Number.MAX_VALUE); // remove, começando do -3, todos os valores restantes do array (até o infinito)
console.log(nomes, removidos); // retorna um array porque ela pode remover mais do que um elemento

console.log(Number.MAX_VALUE); // é o número máximo que se pode ter com JS

nomes.splice(3, 0, 'Matheus'); // começando no índice 3, não remove elementos e adiciona 'Matheus'
console.log(nomes);

const nomeRemovido = nomes.splice(2, 1, 'Liam'); // apagando o índice 2 e substituindo por "Liam"
console.log(nomes, nomeRemovido);

const nomesRemovidos = nomes.splice(0, 2, 'Noel', 'Gallagher'); // apagando o índice 0 e 1 e adicionando por "Noel" e "Gallagher"
console.log(nomes, nomesRemovidos);

// mesmo da função shift (remove o primeiro e retorna ele):
const removidos2 = nomes.splice(0, 1);
console.log(nomes, removidos2);

// mesmo da função push (adiciona um elemento no final do array):
nomes.splice(nomes.length, 0, 'Krist'); // nesse caso, melhor usar o push. Se quisesse adicionar mais coisas, splice é melhor
console.log(nomes);

// mesmo da função unshift (adicionar no começo do array):
nomes.splice(0, 0, 'Kurt');
console.log(nomes);

nomes.splice(0, 0, 'Dave', 'Pat'); // adicionando dois elementos no início
console.log(nomes);