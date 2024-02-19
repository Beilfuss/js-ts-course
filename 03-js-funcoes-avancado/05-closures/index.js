// closure está muito relacionado ao escopo léxico da função

function retornaFuncao() {
    const nome = 'Matheus';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao); // "dir" é semelhante ao "log". No navegador, mostra que ela tem acesso a três escopos:
/*
1) o da função mãe dela "retornaFuncao";
2) o dela (função anônima que retorna o nome);
3) e do global
*/

// o closure é a habilidade dessa função em acessar o seu escopo léxico, que é o da sua mãe e o global. No navegador:

/*
[[Scopes]]: Scopes[3]
0: Closure (retornaFuncao) {nome: 'Matheus'}
    nome: "Matheus"
1: Script {funcao: ƒ}
2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

/*
"Closure", nesse caso, é somente a variável definida fora dela que ela usa (nome: "Matheus").
* "Closure" porque ela está fechando um escopo quando ela é executada. Retornando as variáveis do jeito que foram definidas.

Quando a função é executada, ela tem que relembrar o closure (escopo léximo) dela: lembrar dela e dos vizinhos dela no momento em que foi declarada.
Ela tem acesso, também, ao script, que é o local em que ela foi declarada. Se tivesse outra função onde ela foi declarada, ela também teria acesso a essa função.

Por fim, ela tem acesso ao escopo global, podendo acessar qualquer coisa no navegador que estiver dentro de "window".
*/

console.log('');

function retornaFuncao2(nome) {
    return function () {
        return nome;
    };
}

const funcao2 = retornaFuncao2('Matheus'); // aqui, no closure da função "retornaFuncao2", o nome vai ser "Matheus"
const funcao3 = retornaFuncao2('Beilfuss'); // aqui, no closure da função "retornaFuncao2", o nome vai ser "Beilfuss"
console.dir(funcao2);
console.dir(funcao3);

console.log(funcao2(), funcao3()); // agora, sempre que se chamar funcao2 e funcao3, o nome vai ser "Matheus" e "Beilfuss" respectivamente

// Resumo: closure é a habilidade que a função tem de acessar o seu escopo léxico