# Separando Actions e Reducers

- Vamos separar as actions, tipos das actions e reducers;
- Nesse momento, temos uma aplicação com um único reducer, mas em aplicações grandes, há vários reducers para fazer coisas diferentes;
  - Por isso, é sempre uma boa prática de programação separar as coisas. Cada trecho da aplicação vai ter seu próprio reducer;
- Isto é, pode-se ter vários estados/reducers ouvindo várias ações diferentes e aí separa-se isso em pastas diferentes;
- Dentro de "store", cria-se uma pasta "modules". Nessa pasta é onde os reducers devem ficar;
- Vamos criar um módulo de exemplo para entendermos como funcionaria na prática;
  - Criar uma pasta "example" em "modules";
  - Criar um arquivo "reducers.js" e outro arquivo "actions.js";
  - "actions.js" vai ser responsável por disparar as ações;
    - Em vez de usarmos o "dispatch" e disparar a ação na página, vamos disparar uma ação que está dentro desse arquivo;
    - Por isso, pode-se escrever funções que são actions.
  - Para disparar ações dentro desse arquivo, importa elas na página onde se quer disparar elas e chama elas dentro do dispatcher.
- O reducer escuta todas as ações sendo disparadas. Por isso, é uma boa prática criar um arquivo "types" em "modules";
  - Nesse arquivo, exporta-se todos os tipos de ações da aplicação inteira;
  - Nas actions, basta importar todos os types e usar cada tipo em cada lugar;
  - Com isso, apenas digitando "types.", já se consegue ver todas as ações que estão configuradas na aplicação. Isso evita que desenvolvedores diferentes criem ações com nomes iguais, por exemplo.
- Para separar o reducer, basta copiar ele de "index.js" (dentro de "store") e colocar ele no arquivo "reducer.js" em "modules";
  - Depois, importar ele no "index.js" de "store";
  - O problema disso é se houver mais reducers na aplicação;
  - Para resolver isso, dentro de "modules", cria-se um arquivo "rootReducer.js";
    - A função desse arquivo é combinar vários reducers;
    - Importa-se todos os reducers nesse arquivo e combina eles ali (junta todos);
    - Depois, importa o rootReducer de "modules" e usa eles em vez de um reducer;
    - Por fim, é preciso atualizar o caminho do estado onde o componente é usado, pois agora há um passo a mais, do nome dado ao reducer em questão em "rootReducer".
- Assim, nosso store ficou mais organizado, com arquivos pequenos e fáceis de testar. Além disso, temos types e actions separados em seus arquivos específicos. É dessa forma que se vai ver aplicações no mundo real;
- Agora, a cada reducer, cria-se uma pasta para o reducer em "modules" e, dentro dessa pasta, criar-se-ia um action.js e um reducer.js. Depois, importar-se-ia os reducers no rootReducer e importar-se-ia ele abaixo;
- Entender o que action, reducer e store faz.
