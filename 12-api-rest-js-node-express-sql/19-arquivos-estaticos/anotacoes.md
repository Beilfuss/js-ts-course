# Configurando arquivos estáticos

- Vamos configurar os arquivos estáticos para conseguirmos ver as imagens subidas para a aplicação;
- Vamos criar um campo virtual nas fotos para guardar um link para elas;
- Ir no model de foto, criar o campo "url" e configurar ele.
  - Criar um arquivo "appConfig.js" em "config" com a URL base;
  - Importar ele no model de foto e usar a URL no campo "url".
- Criar uma pasta "images" em "uploads";
  - Atualizar o caminho das imagens no campo "url" do model de foto;
  - Ir em "multerConfig.js" e atualizar onde ele deve salvar as fotos.
- Configurar os arquivos estáticos para que eles possam ser acessados;
  - Ir em "app.js" e declarar qual a pasta de arquivos estáticos (usando path.resolve).
- Adicionar a URL também no index e show do aluno (no AlunoController.js);
- Com isso, temos o arquivo e a URL para acessar esse arquivo.
