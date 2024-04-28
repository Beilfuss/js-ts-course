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
É preciso colocar "**next()**" para chamar a próxima função. Senão colocar, a função "homeController.paginaInicial" não é chamada nesse caso, e aí a primeira requisição não vai terminar. Isso porque não se mandou a resposta para o cliente. Nesse caso, o get achou a rota home ("/") que se estava buscando, passou dentro da rota "meuMiddleware" e depois foi para "homeController.paginaInicial".

```
exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};
```

Adicionar um "**return**" em uma rota faz a requisição terminar naquela função. 
Depois de responder o cliente, pode-se fazer mais alguma coisa. Por exemplo:

```
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui');
});
```

Isso é poderoso porque permite "interceptar" coisas no código. Por exemplo, poder-se-ia usar sessões, salvar coisas na sessão do usuário: a pessoa acessa o site, digita usuário e senha para fazer login, e onde que salva isso? Nos cookies e nas sessões. Usa-se mais sessões porque elas são salvas do lado do servidor.
Pode-se, então, atrelar isso à requisição:

```
function meuMiddleware(req, res, next) {
    req.session = { nome: 'Liam', sobrenome: 'Gallagher' };
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}
```

Com isso, essa requisição chega até o último Middleware. Isso também é poderoso, porque se pode fazer coisas no meio do caminho da requisição, ou antes ou depois de responder o cliente.

Agora, veremos outra forma de trabalhar com middlewares. Vamos trabalhar no server com todas as rotas: todas as rotas que forem requisitadas vão passar pelo middleware do server.js. Se tiver muitos middlewares, ou o middleware ficar muito grande, pode-se criar em "rc" uma pasta "middlewares" com todos os middlewares.