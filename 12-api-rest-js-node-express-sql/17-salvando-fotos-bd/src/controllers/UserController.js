import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }

  // Index
  async index(req, res) { // async porque vai fazer uma consulta no banco de dados e precisa esperar ele retornar
    try{
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // busca todos os usuários na base de dados
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

      const { id, nome, email } = user; // desestruturação para pegar somente os campos que queremos retornar

      return res.json({ id, nome, email }); // retorna o usuário encontrado
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try{
      const user = await User.findByPk(req.userId); // busca o usuário pelo id passado na URL

      if(!user) {
        return res.status(400).json({ // retorna um erro se o usuário não for encontrado
          errors: ['Usuário não existe.']
        });
      }

      const novosDados = await user.update(req.body); // atualiza o usuário com os dados passados no corpo da requisição

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }

  // Delete
  async delete(req, res) {
    try{
      const user = await User.findByPk(req.userId); // busca o usuário pelo id passado na URL

      if(!user) {
        return res.status(400).json({ // retorna um erro se o usuário não for encontrado
          errors: ['Usuário não existe.']
        });
      }

      await user.destroy(); // deleta o usuário

      return res.json(null); // retorna null se der tudo certo

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }
}

export default new UserController(); // exporta a classe já instanciada
