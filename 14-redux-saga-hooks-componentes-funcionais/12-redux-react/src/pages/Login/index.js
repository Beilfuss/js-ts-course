import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Botão clicado.');
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
