# Criando um app com o React

- Vamos criar uma lista de tarefas simples com React puro para compreendermos o básico do React;
    - Em uma seção a seguir vamos consumir a API que criamos.
- Para iniciar uma aplicação React, pode-se configurar tudo do zero ou mais facilmente usando o CLI do React;
    - Na pasta do projeto, executar `npx create-react-app .`;
        - Se quiser criar a pasta do projeto junto, pode-se usar `npx create-react-app [nome do projeto]`.
    - Com isso, já se vai ter uma estrutura pronta com webpack, babel, tudo configurado. A partir dessa aplicação simples que o React cria, criamos os nossos componentes. A instalação pode demorar um pouco porque instala muita coisa.
- Terminada a instalação, explorar o React para entender o que ele oferece;
    - Dar uma olhada nos comandos no "package.json";
        - "start" para iniciar a aplicação no modo de desenvolvimento;
        - "build" para deploy;
        - "test" para teste;
        - "eject" para "ejetar" os arquivos de configuração do projeto caso seja necessário fazer modificações neles.
    - Executar `npm start`;
    - Editar algo em "App.js";
    - Salvar e ver o resultado.
- Na próxima seção, vamos excluir muitas coisas que vieram por padrão que não vamos usar;
    - Vamos criar nossos próprios componentes.
- Ao final dessa seção, já vamos ter compreendido uns 80% do que o React faz. Depois, aprofundamos com Styled-components, Redux etc. Mas, primeiro vamos entender o React básico.
