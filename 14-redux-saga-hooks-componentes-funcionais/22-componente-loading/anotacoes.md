# Componente Loading

- Vamos fazer um componente de loading, para informar ao usuário que a página está carregando;
  - O delay no sistema pode fazer o usuário ficar clicando, tentando uma ação repetidamente, mandando várias requisições para a API. Por isso o loading é importante.
- Para isso, vamos instalar e usar o express-delay na API;
  - `npm i express-delay`;
  - Configurar o express-delay;
  - Enviar as alterações para o repositório remoto (lembrar de rodar "npm i" no repositório remoto também).
- Adicionar um "overlay" nas páginas enquanto elas estiverem carregando (e remover quando a página terminar de carregar);
  - Na pasta "components", criar uma pasta "Loading" para ser o componente que realiza isso.
- Importar o componente "Loading" em todas as páginas;
  - A ideia é fazer o componente de forma que o usuário não consiga clicar em mais nada na página enquanto ela estiver carregando.
- Atualizar o componente antes de redirecionar para outra página (ou simplesmente não atualizar e redirecionar direto para outra página), para evitar memory leak.
