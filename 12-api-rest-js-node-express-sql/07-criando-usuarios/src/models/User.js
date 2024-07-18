import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // valor padrão para gerar um erro
        validate: { // objeto para fazer as validações do campo
          len: { // não pode ser vazio
            args: [3, 255], // mínimo e máximo de caracteres
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        }
      },
    }, {
      sequelize,
    });
    return this;
  }
}
