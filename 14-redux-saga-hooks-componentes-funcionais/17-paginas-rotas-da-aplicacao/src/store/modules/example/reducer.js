import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state }; // copia o estado atual com spread operator
      newState.botaoClicado = !newState.botaoClicado; // altera o valor de botaoClicado
      return newState; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};
