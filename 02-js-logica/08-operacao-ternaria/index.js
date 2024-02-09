// (condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/

// Encurtando usando operação ternária:

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // [condição] ? [valor da variável se verdadeira] : [valor da variável se falsa]
// Mesma coisa que a estrutura acima usando if e else, mas jogando numa variável

console.log(nivelUsuario);

// Outro exemplo, operação do OU:

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // se "corUsuario" for nula, cai no valor padrão (fallback)

console.log(corPadrao);