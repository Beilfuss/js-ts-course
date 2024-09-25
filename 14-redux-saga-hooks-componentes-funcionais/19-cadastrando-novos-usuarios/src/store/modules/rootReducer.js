import { combineReducers } from "redux";

import exampleReducer from './example/reducer';

export default combineReducers({ // aqui, pode-se passar todos os reducers da aplicação
  example: exampleReducer,
});
