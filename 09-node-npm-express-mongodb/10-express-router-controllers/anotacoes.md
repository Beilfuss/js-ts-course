Com apenas alguns exemplos de rotas, já temos bastante código. Um site normal terá muito mais do que esses. Por isso, existe o "**router**" do express. Com ele, não é preciso escrever tudo dessa maneira.
Veremos como usar o router do express para separar as rotas em um arquivo só de rotas. De quebra, vamos criar os "controllers" da nossa aplicação. Vamos usar o padrão full MVC, com backend, frontend na mesma aplicação. Depois, aprenderemos a separar isso numa API, com a aplicação frontend de um lado e backend de outro. Assim, pode-se usar o mesmo backend para fazer, por exemplo, uma aplicação mobile que use o backend.

Primeiro, cria-se um arquivo "**routes.js**". Dentro dele, carrega o express e o router do express.

Feito isso, agora pode se usar ele como rota. Mas, em vez de usar "app.get", usa "**route.get**":

```
route.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Seu nome: <input type="text" name="nome">
        Seu sobrenome: <input type="text" name="sobrenome">
        <button>Enviar</button>
        </form>
    `);
});
```

O trabalho do arquivo "route.js", então, é só fazer o roteamento. Ele vê que rota que é e chama um controlador para a aplicação, que aí decide qual view e model vai usar.

Para criar um "**controller**", primeiro se cria uma pasta "controllers" na aplicação. Feito isso, cria um controller para coisas específicas. Por exemplo, se uma rota é referente à home, trata em um controller; se uma rota é referente à criação de usuário, usa outro controller para tratar as requisições.
Então, cria-se um arquivo para o controller e importa ele em router.js. Depois, importa "route" de "route.js" para a aplicação, já que é "route" que vai conter todas as rotas. Após isso, basta declarar "**app.use(routes)**" para que o express use essas rotas.

Até se poderia criar um controller só e gerenciar tudo, mas não vai ficar organizado.

### Resumo

1) Criou-se um arquivo "routes.js" com o express, route e um controller;
    - O express.Router() é o responsável por tratar as rotas (rota da home, contato, sobre etc.): "trata essa rota enviando para o controller correto";
2) Em "homeController", criou-se as funções que iriam dentro da home;
3) Em "routes.js", só passa a referência, não executa as funções;
4) Agora, para criar outra rota, não é preciso mais mexer em "server.js". As rotas são controladas por "route": chega nele e ele direciona para qual função deve ser chamada.