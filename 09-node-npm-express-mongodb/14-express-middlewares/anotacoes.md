Nessa aula veremos o conceito de middleware do express. O express é baseado em middlewares. Por exemplo:

- route.get('/', homeController.paginaInicial);

Depois de "/", os próximos parâmetros são todos middlewares. Ou seja, poder-se-ia colocar uma função no meio do caminho ou depois de se ter respondido o cliente pra realizar uma tarefa (por isso se chama isso de middleware). Pode-se colocar uma função que chama outra função, que chama outra função e assim até quando se desejar.

Exemplo de middleware:

```
function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial);
```

Depois da rota, antes de responder o cliente, coloca-se uma função para fazer algo. Nesse caso, só se está logando alguma coisa.
"homeControllers", por exemplo, tem dois middlewares. Ambos recebem requisição e resposta. Eles receberiam, também, um terceiro parâmetro "next", que seria o próximo middleware (função) a ser executada.
É preciso colocar "**next()**" para chamar a próxima função. Senão colocar, a função "homeController.paginaInicial" não é chamada nesse caso, e aí a primeira requisição não vai terminar. Isso porque não se mandou a resposta para o cliente.