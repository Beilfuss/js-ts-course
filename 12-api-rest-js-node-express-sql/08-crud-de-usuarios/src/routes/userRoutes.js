import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store); // "store" porque é o método que cria um novo usuário (poderia ser '"create" também)
router.get('/', userController.index); // "index" porque é o método que lista todos os usuários
router.get('/:id', userController.show); // "show" porque é o método que mostra um usuário específico
router.put('/:id', userController.update); // "update" porque é o método que atualiza um usuário

export default router;
