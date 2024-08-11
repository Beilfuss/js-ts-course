# React Router DOM

## Aviso importante do professor

- Nessa seção, utilizei o **React Router Dom na versão 5**. Porém, a lib já foi atualizada para a versão 6. A próxima seção será uma atualização gratuita deste curso para o **React Router Dom v6**.
- Para nossa infelicidade, existem várias breaking changes entre a versão 5 e 6.
- Para acompanhar exatamente como descrito nas aulas dessa seção, utilize o React Router Dom na versão 5.
- Como?
  - Ao instalar o React Router Dom, use o comando a seguir: `npm i react-router-dom@5.2.0`;
- Por que essa seção será mantida no curso?
  - Vou manter essa seção (v5) no curso porque, no mundo real, **você ainda encontrará mais a versão 5** sendo mantida em projetos do que a versão 6. O motivo disso é que as grandes empresas esperam uma lib ficar mais madura para depois atualizar sua base de código. Como o React Router Dom v6 é mais novo, leva um certo tempo para que todo mundo migre sua base de código.

## Minhas anotações

- Vamos ver sobre o roteamento no React;
- Instalar o React Router DOM: `npm i react-router-dom`;
  - Esse pacote vai ser o responsável por fazer o roteamento da aplicação. Assim como há roteamento no backend, há, também, roteamento no frontend, que é para onde a aplicação vai quando o usuário clicar em algum link;
  - Desse modo, não vamos mais usar a tag "<a>" do HTML, e sim o link do React Router DOM.
- Configurar as rotas;
  - Criar uma pasta "routes" em "src";
  - Nesta pasta, criar um arquivo "index.js";
  - Configurar as rotas nele;
  - Importar as rotas "App.js" e usar nele.
- O "exact" dentro de "Route" faz com que componentes sejam renderizados somente quando uma URL exata (existente e correta) é inserida;
- Criar uma página de 404 (qualquer rota que não existir, vai cair em 404);
  - Chamar esse componente no "index.js" de Routes;
  - Criar uma nova página para ele.
- Configurar os links;
  - Importar o Link do React Router DOM no Header;
  - Substituir os "a" por "Link";
  - O Link tem que estar dentro do "BrowserRouter";
    - Tirar o BrowserRouter de "routes";
    - Importar ele no App.js e envolver todos os componentes do App.js com ele.
  - Adicionar os caminhos dos links em cada tag "Link" (em vez de "href" é "to").
- Não vamos usar o BrowserRoutes, vamos usar o Redux e Redux Saga, além do "History" (vamos remover o BrowserRoutes em uma próxima aula).
