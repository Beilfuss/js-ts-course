import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // atrelar os dados à requisição: qualquer página que precisar de login já vai ter na requisição o id e email do usuário
    const { id, email } = dados;

    const user = await User.findOne({
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
