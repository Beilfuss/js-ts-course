import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login'); // passa a classe do form
const cadastro = new Login('.form-cadastro'); // passa a classe do form
const contato = new Contato('.form-contato');

login.init();
cadastro.init();
contato.init();

// import './assets/css/style.css';
