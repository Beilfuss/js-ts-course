"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', // valor padrão para gerar um erro
        validate: { // objeto para fazer as validações do campo
          len: { // não pode ser vazio
            args: [3, 255], // mínimo e máximo de caracteres
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        }
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8); // (valor, força da criptografia). Entre 8 e 10 é o recomendado
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash); // retorna uma promise
  }
} exports.default = User;
