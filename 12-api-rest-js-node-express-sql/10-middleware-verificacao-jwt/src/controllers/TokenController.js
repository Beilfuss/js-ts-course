import User from "../models/User";
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body; // as aspas simples são para caso o usuário não passe o email ou a senha

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas']
      });
    }

    const user = await User.findOne({ where: { email }}); // verifica se o email existe no banco de dados

    if (!user || !user) {
      return res.status(401).json({
        errors: ['Usuário não existe']
      });
    }

    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida']
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({ token }); // retorna um objeto com o token gerado para o usuário logado no sistema
  }
}

export default new TokenController(); // exporta a classe já instanciada
