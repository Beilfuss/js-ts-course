Ainda falta os models da aplicação, e pra isso precisamos de uma base de dados. Qualquer BD pode ser usado aqui, mas vamos usar o MongoDB nesse curso por sua semelhança com o JavaScript.

Para abstrair a parte de instalar e configurar um servidor inteiro, vamos utilizar o site https://www.mongodb.com/products/platform/atlas-database, que disponibiliza um servidor online gratuitamente. Eles disponibilizam 512 MB para salvar coisas.

Tendo uma conta no MongoDB Atlas, vamos criar um cluster gratuito. Criado o cluster, agora é preciso criar um acesso de admin para ele (em "Database Access").

Após isso, ir em "Network Access" e adicionar um IP "0.0.0.0/0", para acessar o Mongo de qualquer lugar, qualquer servidor.

Depois, em "Clusters" (ou "Databases"), clicar em "Connect" para copiar a URL de conexão. Depois, clicar em "Connect to your application" e, na modal que abrir, copiar a string/URL de conexão para realizar a conexão do Node com essa base de dados.