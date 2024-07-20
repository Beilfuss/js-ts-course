import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto'); // 'foto' é o nome do campo que vai receber o arquivo, conforme configurado no Insomnia (poderia ser um campo HTML)

class FotoController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code], // retorna o código do erro
        });
      }

      return res.json(req.file) // retorna o arquivo enviado no corpo da requisição
    });
  }
}

export default new FotoController(); // exporta a classe já instanciada
