const nome = 'Noel';
const sobrenome = 'Gallagher';
const idade = 56;

function soma(x, y) {
    return x + y;
}

// * Formas de se exportar:

// Exportando pelo nome das coisas:
export { nome, sobrenome as sobrenome2, idade, soma }; // agora "nome", "sobrenome", "idade" e "soma" podem ser exportadas do módulo
// usando "as", pode-se trocar o nome do que é exportado

// Exportando separadamente e diretamente na criação:

export const export1 = 'export1';
export const export2 = 'export2';

export default function diminui(x, y) { // exportação "default". Só pode ter um por módulo. Ao importar, pode-se usar qualquer nome para ela e não precisa de chaves
    return x - y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
}

// Exportando como default usando chaves:

const export3 = 'export3';
// export { export3 as default };

// Exportando função anônima como padrão:

// export default (x, y) => x * y;

// É comum exportar classes como padrão