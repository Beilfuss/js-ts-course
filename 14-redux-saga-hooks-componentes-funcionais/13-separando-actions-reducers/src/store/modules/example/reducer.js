const initialState = {
  botaoClicado: false,
};

export default function(state = initialState, action) {
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
