import React from 'react';
import PropTypes from 'prop-types'; // importa o PropTypes para validar as props
import { FaPlus } from 'react-icons/fa'; // import da "font-awesome" para usar ícones

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus /> {/* Ícone de adicionar */}
      </button>
    </form>
  );
}

// Se novaTarefa não fosse obrigatória:

/*
Form.defaultProps = {
  novaTarefa: '', // valor padrão para novaTarefa, necessário quando o parâmetro não é obrigatório
}
*/

Form.propTypes = {
  handleChange: PropTypes.func.isRequired, // handleChange é uma função e é obrigatória
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired, // novaTarefa é uma string e é obrigatória
}
