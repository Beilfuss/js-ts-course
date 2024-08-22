# Redux + React

- Vamos configurar o Redux, que vai servir para configurarmos um estado global na aplicação;
- Vamos usar o Redux para saber se o estado está ou não logado, quais menus vamos exibir etc.;
- Nem toda a aplicação vai precisar de Redux, ele só vai ser necessário quando precisar ter um estado global na aplicação, isto é, quando houver um estado que precisa ser acessado em vários componentes da página;
- Redux vai funcionar da seguinte maneira:
    - Tem um estado inicial que vai ser um objeto;
    - Esse estado inicial já vai ser o estado global da aplicação;
    - Pode-se iniciar esse estado com qualquer valor (true ou false);
    - Para manipular esse estado:
        - Dispara-se uma ação, como "usuário logou";
        - Essa ação é "ouvida" por um reducer;
        - Esse reducer vai ser responsável por alterar o estado (cria um novo estado, manipula este novo estado e retorna ele, que passa a ser o novo estado global da aplicação.).
- Para configurar o Redux;
    - Criar uma pasta "store" em "src", que vai conter tudo o que for relacionado com o Redux;
    - Instalar o redux com `npm i redux react-redux`;
    - Nessa pasta, criar um arquivo "index.js";
    -
