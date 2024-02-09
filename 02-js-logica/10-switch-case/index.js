const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();

let diaSemanaTexto;

/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '' // default
}
*/

// Está-se checando uma variável, comparando uma variável com vários valores
// Esse é o caso perfeito para usar o switch

switch (diaSemana) { // passa a variável que se quer checar
    case 0:
        diaSemanaTexto = 'Domingo';
        break; // para indicar que o switch terminou. Se esquecer do "break", vai executar os próximos casos até achar um "break"
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = ''; // opção padrão
        // break; // aqui break não tem necessidade, porque é a última condição do switch          
}

console.log(diaSemana, diaSemanaTexto);

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) { 
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; // dessa forma, pode-se eliminar o "break" porque o return faz sair da função
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';        
    }
}

diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);