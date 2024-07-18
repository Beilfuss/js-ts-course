import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message) // com isso, o retorno será um array com as mensagens de erro do Sequelize que ocorreram
      });
    }
  }
}

export default new UserController(); // exporta a classe já instanciada
