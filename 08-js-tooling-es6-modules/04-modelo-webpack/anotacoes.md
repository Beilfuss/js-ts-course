1) Adicionar um novo objeto em "rules" no webpack.config.js. Um teste para saber que o arquivo é CSS e outro para usar os loaders de CSS;
    - Há outras formas de se usar CSS no webpack, essa é a mais simples.
2) Depois, instalar os loaders usando "npm install style-loader css-loader";
3) Mudar o arquivo carregado no HTML para o bundle.js;
4) Executando o webpack, pode-se ver que os loaders CSS colocaram o CSS como tags style no head do HTML. Como já dito, pode-se fazer isso de modos diferentes, até como foi feito com o JS: colocar dentro de um arquivo, mandar para outro minificado etc.;
5) Interessante criar uma pasta "modules" dentro de "src" para colocar todos os módulos JS. Se for preciso, pode-se até criar outras pastas dentro dela para organizar melhor;
6) Apagar a pasta "node_modules" para não ficar copiando ela. Cada vez que copiar esse template, basta dar um "npm install" dentro da pasta do template que a node_modules é gerada novamente.