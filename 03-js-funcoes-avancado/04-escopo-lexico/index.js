const nome = 'Matheus';

function falaNome() { // essa função pode usar o que está na sua "vizinhança"
    // const nome = 'Beilfuss'; // usa esse nome, porque está dentro dela
    console.log(nome);
}

falaNome();

/*
Isso é o escopo léxico: a função conhece o local em que foi declarada, tudo o que tá declarado dentro dela e o que tá nos vizinhos dela.
A função tenta achar uma variável, por exemplo, dentro dela; se não achar, procura no pai dela; se não achar, procura no pai do pai dela 
e assim por diante até chegar no escopo global. Se não estiver no escopo global, dá um erro dizendo que a variável não foi definida.
*/

function usaFalaNome() {
    const nome = 'Beilfuss';
    falaNome(); // ao executar a função, ela "lembra" onde foi declarada e os seus vizinhos
    // Nada dentro dessa função "usaFalaNome" vai mexer no contexto léxico (escopo, tanto dela quanto dos pais dela) da "falaNome"
}

usaFalaNome();