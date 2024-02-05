/*
Entre 0 e 11 -> Bom dia!
Entre 12 e 17 -> Boa tarde!
Entre 18 e 23 -> Boa noite!
*/

const hora = 19;


if (hora >= 0 && hora <= 11) { // checa se a condição é verdadeira e, se for, executa o bloco de código
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else { // se não der certo nas outras condições, executa esse bloco de código
    console.log('Olá!');
}

/*
- "if" pode ser usado sozinho;
- "else" sempre requer um "if" anterior;
- Pode-se ter vários "else if"s na checagem;
- Só se pode ter um "else" na checagem.
*/

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa.')
} else [
    console.log('Não vou sair de casa.')
]

/*
- Pode-se usar condições sem else if, utilizando apenas if e else ou só if.
 */