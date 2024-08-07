# Eslint, prettier e editorconfig

- Vamos começar a montar a base do projeto React (base para qualquer projeto, para depois evoluirmos ela);
- Na pasta do projeto, executar `npx create-react-app .` ("." para não criar uma nova pasta);
- Instalar o Eslint e o Prettier (para deixar o código mais bonito);
    - `npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D`.
- Configurar o eslint;
    - `npx eslint --init`;
    - To check syntax, find problems and enforce code style;
    - JavaScript modules;
    - React;
    - Não para TypeScript;
    - Browser;
    - Styleguide da AirBnB;
    - JavaScript;
    - No arquivo de configuração, adicionar:
        - Em "extends";
            - 'prettier';
            - 'prettier/react';
        - 'parser: babel-eslint';
        - Em "plugins":
            - 'prettier';
            - 'react-hooks'.
        - Em "rules":
            - 'prettier/prettier': 'error';
            - 'react/jsx-filename-extension': 0;
            - 'import/prefer-default-export': 0.
- Configurar o prettier;
    - Criar um arquivo `prettier.rc` na raiz do projeto;
    - Adicionar um JSON com as seguintes configurações:
        - "singleQuote": true;
        - "trailingComma": "es5".
- Configurar o editorconfig;
    - Instalar a extensão "EditorConfig";
    - Clicar com o botão direito e gerar um arquivo ".editorconfig";
    - Configurar esse arquivo.
- Configurar o VS Code;
  - Para o eslint, adicionar:

```
"editor.codeActionsOnSave": {
  source.fixAll.eslint": true
}
```

- Testar.

