import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto'); // 'foto' é o nome do campo que vai receber o arquivo, conforme configurado no Insomnia (poderia ser um campo HTML)

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
        const foto = await Foto.create({ originalname, filename, aluno_id }); // cria a foto no banco de dados

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

export default new FotoController(); // exporta a classe já instanciada
