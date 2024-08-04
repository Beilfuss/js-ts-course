"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers; // Authorization: Bearer token

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // se passar do if acima, sabe-se que "authorization" foi enviado pelo usuário

  const [, token] = authorization.split(' '); // ['Bearer, token']. Não precisa do "Bearer", só do token

  // verificar se o token é válido

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    // atrelar os dados à requisição: qualquer página que precisar de login já vai ter na requisição o id e email do usuário
    const { id, email } = dados;

    const user = await _User2.default.findOne({
      where: {
        id,
        email
      }
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
