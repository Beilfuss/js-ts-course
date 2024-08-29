import React from 'react';
import { useDispatch } from 'react-redux'; // useDispatch é um hook que dispara uma action

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions'; // importa todas as actions do arquivo actions.js

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao()); // dispara a action clicaBotao
  }

  return (
    <Container>
      <Title>
        Login
        <small>Olá!</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
}
