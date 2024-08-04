"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto'); // 'foto' é o nome do campo que vai receber o arquivo, conforme configurado no Insomnia (poderia ser um campo HTML)

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code], // retorna o código do erro
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await _Foto2.default.create({ originalname, filename, aluno_id }); // cria a foto no banco de dados

        return res.json(foto) // retorna o arquivo enviado no corpo da requisição
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'], // retorna o código do erro
        });
      }
    });
  }
}

exports. default = new FotoController(); // exporta a classe já instanciada
