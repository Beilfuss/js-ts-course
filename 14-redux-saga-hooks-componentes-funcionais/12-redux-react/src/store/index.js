import { legacy_createStore as createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }; // copia o estado atual com spread operator
      newState.botaoClicado = !newState.botaoClicado; // altera o valor de botaoClicado
      return newState; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
