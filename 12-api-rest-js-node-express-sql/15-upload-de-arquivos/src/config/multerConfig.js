import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // retorna um valor aleatório entre 10000 e 20000

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads')); // define o diretório de destino dos arquivos
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // adiciona a data atual, um valor aleatorio e extensão original ao nome do arquivo
    },
  }),
};
