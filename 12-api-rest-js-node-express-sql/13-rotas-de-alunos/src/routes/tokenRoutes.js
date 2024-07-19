import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store); // "store" porque vamos criar um novo token

export default router;
