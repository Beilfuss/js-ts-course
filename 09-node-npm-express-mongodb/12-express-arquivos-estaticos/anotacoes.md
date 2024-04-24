O "bundle.js", CSS, imagens são conteúdos estáticos: são carregados no site e não mudam com frequência. Para esses arquivos, na pasta raiz do projeto, cria-se uma pasta chamada "**public**". Essa pasta conterá conteúdo estático.
Em "server.js", adicionar:

- app.use(express.static([caminho]));

Usando o path para ter um caminho absoluto:

- app.use(express.static(path.resolve(__dirname, 'public')));

Para testar se está funcionando, pode-se criar um arquivo qualquer em "public" e tentar acessá-lo pela URL

- http://localhost:3000/teste.txt

Se o texto dentro do arquivo aparecer, está funcionando.

Dentro de public, vai haver uma pasta "assets" com CSS, imagens, JS etc. Para acessar essas pastas, não é necessário colocar "public" na URL:

- http://localhost:3000/assets/css/style.css

Agora, já temos conteúdo estático no express.