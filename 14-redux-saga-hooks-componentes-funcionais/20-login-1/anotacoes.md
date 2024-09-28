# Login - 1

- Criar o componente de login;
- Vamos salvar o estado do login no Redux, para ser acessível em toda a aplicação;
  - Criar uma pasta "auth" em /store/modules.
- O login vai ser feito dentro do Saga (loginRequest) e aí, se der certo o login, vamos disparar o success e passar os dados do usuário logado para o reducer.
  - Se der erro, vamos garantir que o usuário não logou: vamos disparar uma action "login failure" e jogar o "initialState" no novo estado para retornar esse estado, garantindo que não houve login.
