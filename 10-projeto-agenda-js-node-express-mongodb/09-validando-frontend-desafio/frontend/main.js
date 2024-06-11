import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login'); // passa a classe do form
const cadastro = new Login('.form-cadastro'); // passa a classe do form

login.init();
cadastro.init();

// import './assets/css/style.css';
