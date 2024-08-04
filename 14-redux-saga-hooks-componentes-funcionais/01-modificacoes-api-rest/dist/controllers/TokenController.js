"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body; // as aspas simples são para caso o usuário não passe o email ou a senha

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas']
      });
    }

    const user = await _User2.default.findOne({ where: { email }}); // verifica se o email existe no banco de dados

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
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({ token }); // retorna um objeto com o token gerado para o usuário logado no sistema
  }
}

exports. default = new TokenController(); // exporta a classe já instanciada
