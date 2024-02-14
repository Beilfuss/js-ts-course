/*

try { // tente executar esse bloco de código. Caso aconteça algum erro, execute o que está no bloco "catch"
    console.log(teste);
} catch(erro) {
    console.log('Variável não definida');
    console.log(erro); // erro fica na variável dentro do "catch()"
}

*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!'); // lançando um erro personalizado e instanciando ele com "Error" para se ter a stack
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (erro) {
    // console.log(erro); // se não instanciar com "Error" ou outro tipo de erro, só a string lançada vai aparecer
    console.log('Algo mais amigável para o usuário.');
}

// há vários tipos de erros no JS (ReferenceError, TypeError,...)