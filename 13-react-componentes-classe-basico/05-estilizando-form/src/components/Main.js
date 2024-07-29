import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa'; // import da "font-awesome" para usar ícones

import './Main.css';

export default class Main extends Component {
    state = { // estado do componente. Todas as chaves aqui dentro vão ser o estado do componente. Tudo o que mudar nesse estado reflete no render
        novaTarefa: "", // inicializa o estado
    };

    handleChange = (e) => { // método como arrow function para ter o this do componente (bind do this)
        this.setState({
            novaTarefa: e.target.value // e.target é o input. value é o valor do input
        });
    }

    render() {

        const { novaTarefa } = this.state; // Destructuring. Equivale a const novaTarefa = this.state.novaTarefa;

        return (
            <div className="main"> {/* "className" porque "class" é uma palavra reservada do JS */} 
                <h1>Lista de tarefas</h1>

                <form action="#" className="form">
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus /> {/* Ícone de adicionar */}
                    </button>
                </form>

            </div> 
        );
    }
}