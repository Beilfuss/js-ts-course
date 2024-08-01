import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // retorna um valor aleatório entre 10000 e 20000

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }

    return cb(null, true); // retorna o callback sem erro e com a validação do arquivo para prosseguir
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // define o diretório de destino dos arquivos
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // adiciona a data atual, um valor aleatorio e extensão original ao nome do arquivo
      // "null" é o primeiro parâmetro da função de callback, que é o erro, caso ocorra
    },
  }),
};
