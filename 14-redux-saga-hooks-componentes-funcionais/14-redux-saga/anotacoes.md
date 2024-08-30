# Redux Saga

- Vamos configurar o redux saga: um middleware que vai funcionar no meio da ação;
  - Ação chamada -> reducer escuta ação -> retorna um novo estado;
  - O problema aqui ocorre quando temos que fazer requisições assíncronas e precisamos de um middleware para interceptar a requisição, fazer ela, ver se deu erro ou passou e executar uma ação de sucesso ou fracasso;
    - Isto é, ficaria assim: ação (request) -> saga -> reducer -> success/fail;
    - Requisita uma ação (pede para o saga "ver" se a ação da certo), e aí o saga chama o reducer;
    - Se a requisição for um sucesso, o saga manda uma ação de sucesso para o reducer. Se der errado, manda uma ação de fracasso;
  - Assim, **quando fizer alguma requisição assíncrona**, pede primeiro para o saga. O saga, então, decide se a requisição foi um sucesso ou foi erro.
- Toda requisição assíncrona (como uma promise) segue os seguintes passos:
  - Pede-se o dado para a promise (essa é a requisição);
  - A promise executa e avisa de resolveu ou rejeitou.
- Vamos implementar isso para entender como funciona;
  - Primeiro, vamos criar três types para três ações (success, request, failure);
    - Todas as requisições síncronas normalmente são assim.
  - Adicionar essas ações no reducer;
  - Nas ações de failure e request, não se pode atualizar o estado porque não se sabe se vai haver algum dado;
    - As ações de request vão ser as que o saga vai escutar;
    - Retorna o estado atual nesse caso.
  - Com isso, configuramos o reducer para receber isso. Vamos agora configurar as actions.
