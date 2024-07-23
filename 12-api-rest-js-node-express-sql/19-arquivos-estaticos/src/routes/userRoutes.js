import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // "index" porque é o método que lista todos os usuários
// router.get('/:id', userController.show); // "show" porque é o método que mostra um usuário específico

router.post('/', userController.store); // "store" porque é o método que cria um novo usuário (poderia ser '"create" também)
router.put('/', loginRequired, userController.update); // "update" porque é o método que atualiza um usuário
router.delete('/', loginRequired, userController.delete); // "delete" porque é o método que deleta um usuário

export default router;
