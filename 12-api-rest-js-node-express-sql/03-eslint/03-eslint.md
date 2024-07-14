# Eslint

- Abrir o terminal na pasta do projeto (ctrl+shift+c);
- Iniciar o projeto na pasta usando `npm init -y`;
- Configurar o Eslint;
    - Na pasta do projeto: `npx eslint --init`;
    - Selecionar para checar sintaxe, encontrar problemas e forçar estilo de código;
    - Selecionar JavaScript modules (import/export);
    - Selecionar "None" na parte de framework;
    - "No" para TypeScript;
    - Selecionar apenas o "Node" para o ambiente.
- Ir em extensões, procurar por "ESLint" e instalar ele;
    - Depois, ir em "settings", "Open Settings (JSON)" e adicionar:
        - "eslint.validate": [ "javascript" ];
        - "editor.codeActionsOnSave": { "source.fixAll.eslint": true };

