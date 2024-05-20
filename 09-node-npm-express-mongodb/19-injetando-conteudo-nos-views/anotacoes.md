Nessa aula veremos como injetar conteúdo no nosso template. Vamos aproveitar para ver melhor como é o EJS.

## Como injetar conteúdo nos views

Em "homeController", a função "render" é quem está renderizando o template HTML (index.ejs). Nessa função, já se pode injetar um objeto como segundo parâmetro e mandar dados dentro desse objeto:

```
exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Esse será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};
```

Assim, já se está injetando dados dentro do template e se pode capturar eles nele. Mas, há outro jeito de injetar dados, mais útil quando precisamos injetar dados em vários templates.
Para injetar conteúdo em todos as rotas, pode-se ir no middleware e, na resposta, utilizar um objeto chamado "locals" para isso:

```
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}
```

Com isso, todas as rotas recebe essa variável (ou objeto, função etc.). Pode-se usar essa variável em uma rota específica, mas aí ela é injetada só naquela rota.

## Como acessar os dados no template?

O EJS tem umas tags de template para isso. No h1 de "index.ejs", se quisermos exibir o "titulo" do objeto dentro de "paginaInicial" no "homeController", basta acrescentar o código abaixo dentro das tags h1:

```
<h1>

    <%= titulo %>

</h1>
```

"<%= %>" é a sintaxe do EJS. Com isso, o título já deve ser renderizado na tela.

Há tags diferentes para diferentes coisas. O sinal de "=" deixa utilizar tags dentro do que renderiza, enquanto o sinal de "-", não:

```

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Esse será o <span style = "color: red;">título</span> da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

=====

<h1>

<%= titulo %><br>
<%- titulo %>

</h1>
```

