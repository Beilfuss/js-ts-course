// doc: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
new Date(); // data atual
new Date(valor); // valor seria em ms, e aí contaria de 01/01/1970 + fuso horário + esse valor
new Date(dataString);   // data em string
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo); // data exata
*/

let data = new Date(); // quando se usa "new", está-se usando uma "função construtura", e Date é uma dessas
// funções construtoras sempre começam com letra maiúscula
// nesse caso, o JS cria um objeto de data com a data atual

console.log(data); // data em milissegundos desde 01/01/1970, início do Unix
console.log(data.toString()); // converte para uma string em inglês

data = new Date(0); // 01/01/1970, Timestamp Unix, marco zero. Para se ter um valor anterior a isso, usa-se um valor negativo como parâmetro
console.log(data.toString()); // dá 31/12/1969 21:00:00 porque o fuso horário é GMT-0300

const tresHoras = 60 * 60 * 3 * 1000; // 60s * 60s dá 1h, vezes 3 dá 3 horas, vezes 1000 para deixar em milissegundos
data = new Date(0 + tresHoras); // aí dá 01/01/1970
console.log(data.toString());

const umDia = 60 * 60 * 24 * 1000; // um dia em milésimos de segundo
data = new Date(0 + tresHoras + umDia); 
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14, 27, 500); // representa 20/04/2019, às 15:14:27:500
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14, 27, 1000); // representa 20/04/2019, às 15:14:28:000
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14, 60, 500); // representa 20/04/2019, às 15:15:00:500. Vai corrigindo o tempo (não existe 60 segundos, vai de 0 a 59)
console.log(data.toString());

// só pode omitir até o dia, senão o ano é considerado milésimo de segundo e tratado como acréscimo à data inicial (01/01/1970)

// formato: ano, mês, dia, hora, minuto, segundo e milissegundo

console.log('');
data = new Date(2019, 3, 20, 15, 14, 59); // sem ms
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14); // sem segundos
console.log(data.toString());

data = new Date(2019, 3, 20, 15); // sem minutos
console.log(data.toString());

data = new Date(2019, 3, 20); // sem hora
console.log(data.toString());

data = new Date(2019, 3); // sem dia
console.log(data.toString());

data = new Date(2019); // deixando só o ano já funciona de outra forma, tratando em milissegundos
console.log(data.toString());

// mês, em JS, começa em 0. Meses vão de 0-11

console.log('');

data = new Date('2019-04-20 20:20:59.150'); // formato em "dataString"
console.log(data.toString());

console.log('Dia', data.getDate()); // pega o dia
console.log('Mês', data.getMonth() + 1); // pega o mês e soma 1 porque mês começa do zero
console.log('Ano', data.getFullYear()); // pega o ano
console.log('Ano', data.getHours()); // pega as horas
console.log('Min', data.getMinutes()); // pega os minutos
console.log('Seg', data.getSeconds()); // pega os segundos
console.log('ms', data.getMilliseconds()); // pega os milissegundos
console.log('Dia da semana', data.getDay()); // pega o dia da semana: 0 - domingo, 6 - sábado

console.log('');

let agora = Date.now();
console.log(agora); // milésimos de segundos da data atual

data = new Date(agora);

console.log(data.toString());

console.log('');

// função que formata datas:

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // se o número for maior ou igual a 10, retorna ele. Senão, acrescenta um 0 na frente
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

data = new Date();
const dataAgora = formataData(data);
console.log(dataAgora);