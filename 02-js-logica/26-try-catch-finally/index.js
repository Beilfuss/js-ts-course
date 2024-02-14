/*

try {
    * só essa parte é executada quando não há erros
} catch (e) {
    * essa parte é executada quando há erros na parte anterior
} finally {
    * essa parte é executada sempre, e pode ser omitida
}

*/

/*

try {
    // console.log(a);
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou o erro.');
    console.log('Fechei o arquivo.');

    try {
        console.log(a);
    } catch(e) {
        console.log('Deu erro.');
    } finally {
        console.log('Também sou finally.')
    }

} catch (e) {
    console.log('Tratando o erro.');
} finally {
    console.log('Finally: Sempre sou executado.');
}

*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // se a data foi enviada e não é uma instância de Date, lança o erro
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) { // se a data não foi enviada, cria uma data
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}


try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora('a');
    console.log(hora);
} catch(e) {
    // Tratar o erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia.')
}