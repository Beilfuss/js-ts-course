## Projeto Agenda

### Aula 01 - Criando o template HTML (EJS)

- Trocar o nome da base de dados para usarmos uma base específica para esse projeto;
- "npm i" para instalar os módulos;
- Vamos criar um novo template usando bootstrap;
    - Get started do Bootstrap: https://getbootstrap.com/docs/5.2/getting-started/introduction/
    - Navbar utilizada: https://getbootstrap.com/docs/5.2/components/navbar/#how-it-works

### Aula 02 - Criando a página de Login / Criar conta

- Mudança de nomes nas rotas: tudo que for raiz da rota que se está tentando acessar, vai ter o nome de "index";
    - Ex.: a função "raiz" de homeController se tornou "index".
- Criou-se a rota de login;
- Criou-se o controller de login;
- Formulário da página de login do Bootstrap: https://getbootstrap.com/docs/4.3/components/forms/
- No formulário, criou-se rotas para receber os dados do formulário;
    - O método padrão de um form sem "method" é GET. Mudou-se para POST.
- Adicionou-se csrf Token aos formulários.

### Aula 03 - Criando usuários - 1

- Funcionalidade de cadastrar usuário;
    - Validando e-mail;
    - Criptografando a senha.
- Criou-se a rota de registro;
- Passou-se os dados do loginController para LoginModel;
- Validou-se os dados em LoginModel;
    - Usou-se o pacote "validator" para isso: npm i validator.
- Registrou-se o usuário na base de dados;
- Adicionou-se flash messages de erro e de sucesso.

### Aula 04 - Criando usuários - 2

- Fez-se hash das senhas;
    - npm i bcryptjs
- Antes de registrar o usuário, fez-se hash da senha com a senha e um salt;
- Verificou-se se usuário já não está na base de dados.

### Aula 05 - Logando o usuário

- Adicionou-se um link que redireciona para a tela de Cadastro/Login;
- Criou-se uma função de login em loginController e em LoginModel;
- Em LoginModel, verificou-se se o usuário existe e se a senha inserida é igual à da base de dados;
- Em loginController, criou-se uma sessão para o usuário;
- Para debugar a sessão: console.log(req.session.user);
    - Com isso, é possível ver os dados do usuário na sessão;
    - Esse log foi colocado antes do render da página de login no loginController.
- Colocou-se essa sessão para dentro das páginas usando o middleware global;
    - res.locals.user = req.session.user;
- Criou-se uma rota de logout;
    - Criou-se botões de sair e entrar.
- Mudou-se a página quando entra.

### Aula 06 - Cadastrando contatos (Create)

- Criou-se uma rota get para a página de cadastrar contato;
- Criou-se o "contatoController";
- Criou-se uma página EJS com o formulário para cadastro do contato;
- Restringiu-se o acesso à página de registro de contato apenas para usuários logados;
    - Criou-se um middleware que checa se existe o user na sessão;
    - O middleware "loginRequired" pode ser usado em qualquer página que se queira que não esteja acessível para quem não está logado.
- Criou-se uma rota post para o registro do usuário;
    - No "contatoController", criou-se uma função "register" para essa rota;
    - Essa função só recebe os dados e salva na base de dados.
- Criou-se um model "ContatoModel" para salvar os contatos;
    - O de Login foi criado com classe, esse de contato foi criado com uma constructor function;
    - Tratou-se os dados com "cleanUp" e "valida" também para o "ContatoModel".
- Validou-se os dados de contato antes de criá-lo;
- Criou-se uma rota para redirecionar para a edição do contato logo após criá-lo.

### Aula 07 - Editando contatos (update)

- Criou-se uma condicional no campo de contato para se o contato já existir, mandar para a rota de edição;
- Criou-se uma rota de edição do contato;
- Criou-se uma função "edit" no ContatoModel e no contatoController.

### Aula 08 - Listando e apagando contatos (read e delete)

- Importou-se os contatos em "homeController";
- Criou-se uma função para mostrar contatos em "ContatoModel";
    - Método pode ser estático (sem "this");
    - Métodos estáticos não vão para o prototype, não têm acesso à palavra "this".
- Listou-se os contatos dinamicamente na página inicial, possibilitando a edição deles já por ali;
- Criou-se uma rota "delete";
- Criou-se uma função "delete" em "contatoController" e em "ContatoModel";
- Até agora, validamos só no backend, mas o ideal é validar no frontend, backend e na base de dados.

### Aula 09 - Desafio - Validando o front-end

- Validamos somente o back-end, precisamos validar todos os formulários no front-end também;
    - Assim, economiza-se várias idas ao servidor para validar os campos. Valida sem atualizar a página.
- Criou-se uma pasta "modules" na pasta "frontend" para armazenar os arquivos JS de validação;
- Criou-se classes nos formulários;
- Importou-se os arquivos de validação em "main.js";
- Em vez de usar alert, pode-se criar um texto abaixo do campo, usar o Axios para checar se o usuário tentando logar já existe etc.;
- Validar o formulário de cadastro de contato (e edição).