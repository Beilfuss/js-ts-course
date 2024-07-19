# Correções de segurança para usuários

- Em "userRoutes.js";
  - Remover a listagem de todos os usuários (index);
  - Remover a listagem de um usuário (show);
    - Isso porque não é seguro ficar listando dados sensíveis dos usuários.
  - Usuário só pode editar seus dados, não dos outros, por isso se pode retirar a seleção de id da rota de update;
  - Usuário só pode excluir a si mesmo, não os outros, por isso se pode retirar a seleção de id da rota de delete;
  - Exigir login para o update e delete, atualizando somente o dado que estiver no token.
- Para manter o "index" e o "show", poderia ocultar os dados que não quer que apareçam;
  - Em "UserController.js", adicionar atributos a serem retornados no "findAll" do index;
  - No show, store e update, pegar apenas id, nome e email do usuário.
- Quando o usuário trocar de e-mail, não deixar mais ele usar o mesmo token;
  - Para isso, verificar, no middleware "loginRequired.js", se o id e e-mail do usuário vindos no token batem com os que estão na base de dados. Se não tiver, quer dizer que o e-mail foi modificado e o usuário vai precisar logar novamente e conseguir um novo token para usar o sistema.
  - Similar ao que a sessão faz.
- Com isso, um usuário não pode editar nem deletar outro. Além disso, não é mais possível, também, listar todos os usuários e um único usuário (index e show).
