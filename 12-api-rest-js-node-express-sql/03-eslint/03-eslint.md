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
- Para desativar um erro do Eslint, pode-se declarar como comentário:
    - Acima da linha: `// eslint-disable-next-line`;
    - Na frente da linha: `// eslint disable-line`;
    - Isso não é muito recomendado.
- Extensão útil: "Bracket Pair Colorizer".

## Nota do professor

### Atualização Eslint

A configuração de "eslint.autoFixOnSave" no VSCode não funciona mais para que o eslint faça correção do código automaticamente.

Utilize a seguinte configuração ao invés de "eslint.autoFixOnSave":

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
},
```
