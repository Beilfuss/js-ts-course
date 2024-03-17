### Sobre o template

- Primeiro de tudo, dar "npm install" para instalar os módulos em package.json;
- O script "gera" no package.json utiliza webpack para ficar assistindo qualquer alteração feita nos arquivos de código
fonte (src) e jogar tudo em "./assets/bundle.js";
    - Isso quer dizer que toda a pasta "public" pode ser utilizada em qualquer navegador que, em teoria, deve funcionar;
    - Por isso podemos escrever um código moderno em "src", com módulos, e o webpack vai converter tudo para bundle.js que vai funcionar em qualquer navegador antigo.
- O script "gera" no package.json teve o nome mudado para "dev", que é mais comum.

### Sobre os módulos

- Módulos são arquivos no JS. Quando criamos um arquivo, nenhum arquivo externo consegue acessar nada que tem dentro dele. 
    - Como se fosse o escopo de uma função, que é fechado, não se consegue acessar nada dentro do escopo da função fora
    da função, a não ser que se retorne algum valor.
- Nos módulos, há uma espécie de retorno que, na verdade, é uma exportação. Pode-se exportar coisas (variáveis, funções, classes etc.) de um arquivo. A partir do momento em que se faz isso, habilita-se a possibilidade de outro arquivo importar aquela função, classe ou variável, ou todas de uma vez;
- Se um módulo A exporta coisas, um módulo B pode importar essas coisas e utilizar elas dentro de si;
- Coisas não exportadas são consideradas privadas e só podem ser usadas dentro do módulo (o que é muito útil para usos internos do módulo);
- "Default" é a coisa padrão que se está exportando (classe, função, variável). Ao importar um default, não se usa as chaves e pode dar o nome que quiser;
- Ler a documentação do [import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import) e [export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export);