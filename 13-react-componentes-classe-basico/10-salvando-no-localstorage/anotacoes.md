# Salvando no localStorage

- Vamos salvar as tarefas no localStorage;
- React tem várias funções executadas quando algo acontece;
  - Por exemplo, quando um componente é montado na tela, a função "componentDidMount" é executada.
- Vamos usar a função "componentDidUpdate" para salvar;
  - Cada letra digitada no input atualiza esse componente;
  - Vamos usar isso para que, quando as tarefas mudarem, salvemos elas na base de dados (localStorage, nesse caso).
- Configurar a lista de tarefas quando a página for recarregada, para as tarefas voltarem;
  - Nesse caso, vamos usar a função "componentDidMount", que é executado uma vez assim que o componente for montado.
- Agora, precisamos separar esses componentes.
  - Em uma aplicação normal, já faríamos os componentes separados. Aqui, fizemos tudo num componente só por questão didática;
  - Vamos separar em três componentes diferentes: main, form e tarefas.

