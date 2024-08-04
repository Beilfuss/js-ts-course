"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index); // "index" porque é o método que lista todos os usuários
// router.get('/:id', userController.show); // "show" porque é o método que mostra um usuário específico

router.post('/', _UserController2.default.store); // "store" porque é o método que cria um novo usuário (poderia ser '"create" também)
router.put('/:id', _loginRequired2.default, _UserController2.default.update); // "update" porque é o método que atualiza um usuário
router.delete('/:id', _loginRequired2.default, _UserController2.default.delete); // "delete" porque é o método que deleta um usuário

exports. default = router;
