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