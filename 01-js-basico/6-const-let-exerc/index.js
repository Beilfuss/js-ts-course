/* 
Matheus Beilfuss tem 21 anos, pesa 64 kg,
tem 1.80 de altura e seu IMC é de 19.75
Matheus Beilfuss nasceu em 1980
*/

const nome = 'Matheus';
const sobrenome = 'Beilfuss';
const idade = 21;
const peso = 64;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = (new Date().getFullYear()) - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg,');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

console.log('')

// Gabarito abaixo

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg,');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');

console.log('');

// Usando +

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg,'); // União dos valores em uma string só
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');

console.log('');

// Usando template strings

// Maneira mais moderna e legível
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg,`); 
console.log(`tem' ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);