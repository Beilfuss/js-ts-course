const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.index); // "use a função 'index' do 'homeController'"

// Rotas de login
route.get('/login/index', loginController.index); // pode-se omitir "index"

module.exports = route;