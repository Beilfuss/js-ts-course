# CRUD de alunos

- No model de alunos, validar os campos;
- Criar as outras rotas de alunos;
  - Store, Update, Show, Delete;
  - Se precisar de mais rotas aqui, talvez seja necessário outro controller.
- Criar essas funções no controller do aluno;
- Criar requisições na pasta "Alunos" no Insomnia para testar essas funções;
- Fechar as rotas que requerem login.
  - Importar o middleware "loginRequired" e usar ele nas rotas em que login é preciso;
  - Logar um usuário usando o Store do Token e testar as rotas com login.
