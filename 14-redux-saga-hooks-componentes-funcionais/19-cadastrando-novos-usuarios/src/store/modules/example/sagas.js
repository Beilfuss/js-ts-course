import { call, put, all, takeLatest } from 'redux-saga/effects';
// call é um método do redux-saga que chama uma função assíncrona
// put dispara uma action
// all é um método do redux-saga que permite que várias sagas sejam executadas ao mesmo tempo
// takeLatest é um método do redux-saga que escuta uma action e dispara uma função (pega o último clique do usuário)

import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

// Promise para simular uma requisição assíncrona (da API, por exemplo)
const requisicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 600);
});

// Função geradora
function* exampleRequest() {
  try {
    yield call(requisicao); // chama a função assíncrona
    yield put(actions.clicaBotaoSucess()); // put dispara a action clicaBotaoSucess
  } catch {
    toast.error('Deu erro.'); // exibe um toast de erro
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest), // qual ação vai ouvir e qual função vai disparar
]);
