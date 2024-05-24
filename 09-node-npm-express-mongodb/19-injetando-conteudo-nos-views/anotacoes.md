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

Há tags diferentes para diferentes coisas. O sinal de "=" não deixa utilizar tags dentro do que renderiza (utilizado quando o conteúdo é HTML), enquanto o sinal de "-", deixa:

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

## Controle de fluxo

Digamos que seja necessário verificar se a variável "título" foi enviada. Para tal, basta acrescentar um if no próprio ejs:

```
 <h1>

    <%  %>

</h1>
```

O sinal de controle de fluxo é simplesmente "<% %>".

## forEach com ejs

```
<h1>

    <% numeros.forEach(num => { %>
        <%= num %><br>
    <% }); %>

</h1>
```

## Como fazer "includes"

No HTML, normalmente se trabalha apenas no body. Ou seja, o <head> geralmente não muda. Logo, pode-se pegar os trechos que não mudam, separá-los em arquivos menores e incluir eles em outras páginas.
Para fazer isso, copia-se as partes para incluir em outras partes e se cola elas em um arquivo em uma pasta chamada "includes" dentro de "views". Todos os arquivos a serem incluídos no HTML ficam nessa pasta.
Depois, basta usar as tags do EJS para incluir outras partes de HTML nos arquivos que se quer:

```
<%- include('includes/head'); %>
    <section class="container">
      <h1>Lorem ipsum</h1>
      <form action="/" method="post">
        <label for="cliente">Cliente</label>
        <input type="text" name="cliente">
        <button>Submit</button>
      </form>
    </section>

<%- include('includes/footer'); %>
```

E aí, para cada página que se criar, copia-se esse trecho inteiro e só edita a parte do meio. O que for padrão em todas as páginas já está pronto. Um menu, por exemplo, ficaria o mesmo em todos as páginas.

É possível, também incluir variáveis de middlewares:

```
<%- include('includes/head'); %>
    <section class="container">
      <h1> <%= umaVariavelLocal %> </h1>
      <form action="/" method="post">
        <label for="cliente">Cliente</label>
        <input type="text" name="cliente">
        <button>Submit</button>
      </form>
    </section>

<%- include('includes/footer'); %>

=====

exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}
```

Essa variável vai estar disponível em todas as páginas, porque está em um middleware sem rota em "server.js". Se colocasse uma rota para esse middleware, ela só estaria disponível nessa rota.

## Tags do EJS

- <% Controle de fluxo (if, for...) %>
- <%= Imprime "escapando" caracteres %>
- <%- Imprime sem "escapar" caracteres %>
- <%# Comentário %>
- <%- include('caminho/arquivo'); %>

### Exemplo de controle de fluxo

Não esquecer de abrir e fechar as tags do EJS:

```
<% if (algumacoisa) { %>
    <%= exibe alguma coisa %>
<% } else { %>
    <%= exibe outra coisa %>
<% } %>
```

