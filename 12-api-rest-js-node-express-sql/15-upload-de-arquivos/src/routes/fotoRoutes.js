import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store); // 'foto' é o nome do campo que vai receber o arquivo, conforme configurado no Insomnia (poderia ser um campo HTML)

export default router;
