// * Formas de se importar:

import { nome as nome2, sobrenome2, idade, soma } from './modulo1'; // agora, pode-se usar essas variáveis e função aqui nesse módulo
// usando "as", pode-se trocar o nome do que é importado

const nome = 'Liam'; // essa variável "colide" com a que se está importando, e aí dá erro. Para resolver isso, pode-se renomear na importação

console.log(nome, nome2, sobrenome2, idade);
console.log(soma(5, 5));

import { export1, export2, diminui, Pessoa as classePessoa } from './modulo1';

const p1 = new classePessoa('Krist', 'Novoselic');
console.log(p1);

import * as MeuModulo from './modulo1'; // importando tudo de "modulo1"

console.log(MeuModulo); // um objeto que tem tudo o que está exportado em "modulo1". O que não exportar não vem
// variáveis não exportadas podem ser consideradas variáveis privadas de um módulo, o que é poderoso porque não se toca o escopo global

import subtrai from './modulo1'; // importando o padrão (default) dentro de "modulo1". Pode ser qualquer nome
// sempre que se importa sem chaves, importa o default

console.log('Função default: ', subtrai(10, 2));

import padrao, { export3 } from './modulo1'; // importando o padrão e outras coisas do arquivo

console.log(padrao(10, 3), export3);

const p2 = new classePessoa(nome, sobrenome2);
console.log(p2);