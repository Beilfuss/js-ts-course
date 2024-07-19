import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }

  // Index
  async index(req, res) { // async porque vai fazer uma consulta no banco de dados e precisa esperar ele retornar
    try{
      const users = await User.findAll(); // busca todos os usuários na base de dados
      console.log('USER ID:', req.userId);
      console.log('USER EMAIL:', req.userEmail);
      return res.json(users); // retorna todos os usuários
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(null); // retorna null se der erro
    }
  }

  // Show
  async show(req, res) {
    try{
      const user = await User.findByPk(req.params.id); // busca o usuário pelo id passado na URL
      return res.json(user); // retorna o usuário encontrado
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try{
      if(!req.params.id) { // verifica se foi passado o id na URL
        return res.status(400).json({ // retorna um erro se não for passado o id
          errors: ['ID não enviado.']
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({ // retorna um erro se o usuário não for encontrado
          errors: ['Usuário não existe.']
        });
      }

      const novosDados = await user.update(req.body); // atualiza o usuário com os dados passados no corpo da requisição

      return res.json(novosDados);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }

  // Delete
  async delete(req, res) {
    try{
      if(!req.params.id) { // verifica se foi passado o id na URL
        return res.status(400).json({ // retorna um erro se não for passado o id
          errors: ['ID não enviado.']
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({ // retorna um erro se o usuário não for encontrado
          errors: ['Usuário não existe.']
        });
      }

      await user.destroy(); // deleta o usuário

      return res.json(user); // retorna o usuário deletado

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }
}

export default new UserController(); // exporta a classe já instanciada
