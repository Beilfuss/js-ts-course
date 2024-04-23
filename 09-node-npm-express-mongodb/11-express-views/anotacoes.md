Quando se desenvolve com esse modelo, sem frameworks, normalmente se tem uma pasta para backend e outra para frontend. Aqui, vamos adicionar "controllers" e "views" para "src".

Agora, é preciso informar o express de que a pasta "views" conterá views e qual a engine que ele vai utilizar para renderizar essas views. Para isso, basta adicionar:

- app.set([nome da pasta], [caminho da pasta])

e

- app.set('view engine', [nome da engine que se quer utilizar]);

Utilizaremos o "ejs" para renderizar as views. Essas engines são utilizadas para que se tenha acesso a dados dentro do template e se consiga fazer um if, for, print etc. O caminho pode ser relativo ou absoluto, mas é recomendável usar o caminho absoluto para evitar erros (usar "path" para isso).
Como vamos utilizar o ejs, é preciso instalá-lo:

- npm i ejs

Dentro de views, então, cria-se um arquivo "index.ejs". Ele é bem similar ao HTML, mas permite fazer coisas a mais.

Com isso, não é mais necessário enviar, em "homeController", HTML. Pode-se enviar apenas o nome do arquivo usando "res.render()".

De:
```
exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Seu nome: <input type="text" name="nome">
    Seu sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    </form>
    `);
};
```

Para:
```
exports.paginaInicial = (req, res) => {
    res.render('index');
};
```

Não é preciso a extensão "ejs". Após isso, o express renderiza o HTML. Em uma próxima aula veremos como fazer um for, if no HTML. Também, criaremos outra pasta ("public") para deixar os arquivos estáticos, que não mudam (geralmente CSS, bundle, imagens etc.).