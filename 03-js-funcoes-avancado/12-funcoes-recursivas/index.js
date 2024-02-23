// Para entender recursividade, você primeiro precisa entender recursividade.

// Recursividade tem um limite, depende de quão grande o navegador permite que o stacktrace seja. 
// Se a recursividade for muito grande, navegador interrompe o call stack porque acha que há algum erro no código, como um loop infinito

function recursiva(max) {
    console.log(max);
    if (max >= 10) return; // sempre se preocupar com a condição de parada
    max++;
    recursiva(max); // executa o código acima e se chama
}

recursiva(0);