# Router e History

## Aviso antes da aula

- **Atualização 29/06/2020** - aparentemente o `history` (versão 5x) não está funcionando adequadamente com o `react-router-dom` (versão mais recente). Por isso, você poderá ter problemas de navegação;
- Para corrigir o problema, execute o seguinte comando: `npm i history@4.10.1`;
- Isso deverá instalar uma versão do `history@4.10.1` que funciona normalmente com o `react-router-dom`.

## Minhas anotações

- Vamos trocar o BrowserRouter para podermos ter acesso ao histórico dos acessos e, com isso, sermos capazes de redirecionar o usuário fora do BrowserRouter;
- Trocar "BrowserRouter" para "Router" em "App.js";
- Configurar o History;
  - Criar uma pasta "services" dentro de "src" (essa pasta vai guardar todas as configurações dos serviços que vamos configurar);
  - Nessa pasta, configurar um arquivo "history.js";
  - Na pasta do projeto, instalar o history: `npm i history`;
  - No arquivo "history.js", configurar o history.
- Em App.js, importar o History e usá-lo na tag "Router";
- Agora, pode-se usar ele em qualquer página, como na 404 por exemplo, de modo que qualquer página que não existe vai ser direcionada para a 404.
