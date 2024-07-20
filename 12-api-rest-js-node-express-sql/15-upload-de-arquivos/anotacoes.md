# Upload de arquivos

- Vamos fazer upload de arquivos;
- Express não suporta isso por padrão. Por isso, vamos instalar o "multer": `npm i multer`;
- Criar uma rota específica para receber arquivos. Vamos usar isso para fazer upload de fotos do usuário;
  - Criar um controller para as fotos;
  - Criar uma rota para as fotos;
  - Importar e usar a rota em "app.js".
- Criar uma pasta "Fotos" no Insomnia para testar essas rotas;
  - Criar uma requisição POST "Store" com body do tipo "Multipart Form" ou "Form Data" para suportar o envio de arquivos (JSON não suporta);
    - "base_url/fotos".
  - No body da requisição, criar um campo chamado "arquivo" com "value" settado em "file", para escolher um arquivo (imagem, no caso).
- Configurar o multer;
  - Criar um arquivo "multerConfig.js" na pasta "config";
  - Importar o multer e as configurações dele nas rotas de fotos;
  - Adicionar o middleware do multer nas rotas em que se quer receber upload de arquivos.
    - Especificar se quer receber um ou vários arquivos.
- Com isso, consegue-se pegar informações do arquivo enviado usando "req.file" no controller e manipular ele como quisermos.
