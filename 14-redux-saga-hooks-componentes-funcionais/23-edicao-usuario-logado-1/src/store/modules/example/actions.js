import * as types from '../types';

export function clicaBotaoRequest() { // ação que será disparada
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSucess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
