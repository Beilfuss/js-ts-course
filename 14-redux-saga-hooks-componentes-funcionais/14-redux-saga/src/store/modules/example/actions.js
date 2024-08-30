import * as types from '../types';

export function clicaBotao() { // ação que será disparada
  return {
    type: types.BOTAO_CLICADO,
  };
}
