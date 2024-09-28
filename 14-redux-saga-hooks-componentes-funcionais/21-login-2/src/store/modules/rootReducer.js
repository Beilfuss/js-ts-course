import { combineReducers } from "redux";

import auth from './auth/reducer';

export default combineReducers({ // aqui, pode-se passar todos os reducers da aplicação
  auth,
});
