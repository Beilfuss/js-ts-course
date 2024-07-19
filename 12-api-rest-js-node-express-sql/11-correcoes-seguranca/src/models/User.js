import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

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
        unique: {
          msg: 'Email já existe',
        },
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

    this.addHook('beforeSave', async (user) => { // ([hook], callback)
      if(user.password) { // se o usuário passou a senha, criptografa ela
        user.password_hash = await bcryptjs.hash(user.password, 8); // (valor, força da criptografia). Entre 8 e 10 é o recomendado
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash); // retorna uma promise
  }
}
