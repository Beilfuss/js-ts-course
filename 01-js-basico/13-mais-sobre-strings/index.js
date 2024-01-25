let umaString = 'Um "texto"';

console.log(umaString);

umaString = "Um \"texto\""; // Pode-se usar "\" para ignorar aspas em strings com aspas duplas

console.log(umaString);

umaString = "Um \\texto"; // Mostra a barra invertida, se necessário

console.log(umaString);

// Strings são indexadas, pode-se iterar sobre eles. Cada caracter tem um índice:

//           01234567. Além desses valores retornaria "undefined"
umaString = 'Um texto';
console.log(umaString[4]);

// Há funções para diversas ações com strings

console.log(umaString.charAt(4)); // Faz o mesmo que o comando anterior. Retorna o elemento da posição selecionada

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Faz o mesmo que o "+". Concatena valores
console.log(umaString + ' em' + ' um' + ' lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto')); // Retorna o índice em que "texto" começa. Se não encontrar, retorna "-1"
console.log(umaString.indexOf('o', 3)); // Retorna o índice de "o" buscando a partir da posição 3

console.log(umaString.lastIndexOf('m', 3)); // Faz a mesma coisa, mas começando pelo final. Varre de trás para frente

console.log(umaString.match(/[a-z]/g)); // Expressão regular. Retorna todas as letras minúsculas na string

console.log(umaString.search(/[a-z]/)); // Expressão regular. Retorna o índice em que o que foi pedido foi encontrado. Nesse caso, o índice da primeira letra minúscula
// "search" é similar ao indexOf, mas ele aceita expressões regulares

console.log(umaString.replace('Um', 'Outro')); // Substitui uma palavra por outra
console.log(umaString.replace(/Um/, 'Outro')); // Com expressão regular

umaString = 'O rato roeu a roupa do rei de Roma.';
console.log(umaString.replace(/r/, '#')); // Substitui o primeiro "r" por "#"
console.log(umaString.replace(/r/g, '#')); // Substitui todos os "r" por "#"

console.log(umaString.length); // Retorna a quantidade de caracteres da string

console.log(umaString.slice(2, 6)); // Retorna um "corte" da string
console.log(umaString.slice(-5)); // Usando número negativo corta começando do fim. Pega a string inteira, menos o número negativo
console.log(umaString.slice(-5, -1));

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // Faz o mesmo que o comando acima

console.log(umaString.split(' ')); // Coloca em um array divindo pelo caracterer dentro da função
console.log(umaString.split('r'));
console.log(umaString.split('r', 3)); // Limita o número de resultados a 3

console.log(umaString.toUpperCase()); // Deixa todas as letras em maiúsculo
console.log(umaString.toLowerCase()); // Deixa todas as letras em minúsculo

// Documentação tem todas as manipulações de strings