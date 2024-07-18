import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store); // "store" porque é o método que cria um novo usuário (poderia ser '"create" também)

export default router;
