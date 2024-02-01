/* 
Primitivos (valores imutáveis) - string, number, boolean, undefined, null. Faltando bigint e symbol

Referência (mutável) - array, object, function

Valores primitivos são copiados quando se passa eles para outra variável. Valores por referência são passados usando apenas o seu
endereço de memória
*/

let nome = 'Matheus';
nome = 'Beilfuss'; // não modificou a string, apenas trocou o conteúdo da variável
nome[0] = 'P';
console.log(nome[0], nome); // não muda porque string é imutável

let a = 'A';
let b = a; // cópia

a = 'Outro valor'; // não afeta o valor de b porque b teve o valor de 'a' copiado
console.log(a, b);

let c = [1, 2, 3];
let d = c; // nesse caso, não se copia o valor, passa-se o dado por referência. d aponta para o mesmo lugar na memória
console.log(c, d);

d.push(4);
console.log(c); // porque ambos apontam para o mesmo valor

let e = [...c]; // nesse caso, copia o valor de c para e, mesmo c tendo um array (tipo de referência)

const f = {
    nome: 'Matheus',
    sobrenome: 'Beilfuss'
}
const g = f;

console.log(g); // o mesmo para objetos

const h = {...g}; // copia o objeto. "Spread" o valor de f

f.nome = 'João';
console.log(g);

console.log(h);
