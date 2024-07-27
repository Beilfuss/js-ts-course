# Eslint e Editorconfig

- Vamos configurar o Eslint e o Editorconfig;
- Clicar com o botão direito na raiz do projeto e selecionar "Generate .editorconfig";
    - Verificar se há a extensão do editorconfig instalada;
    - Declarar as configurações desejadas.
- Na pasta do projeto, executar `npm i eslint babel-eslint --save-dev`;
  - Verificar se há a extensão do eslint instalada;
  - Executar `npx eslint --init`;
    - "To check syntax, find problems, and enforce code style";
    - "JavaScript modules (import/export)";
    - "React";
    - "N" para TypeScript;
    - "Browser";
    - "AirBnB styleguide";
    - "JavaScript".
  - No arquivo ".eslintrc.js" ou "eslint.config.mjs".
    - Adicionar "parser: 'babel-eslint'".
- Ir nas configurações do VS Code (Settings.json) e verificar se as configurações do Eslint estão corretas.
