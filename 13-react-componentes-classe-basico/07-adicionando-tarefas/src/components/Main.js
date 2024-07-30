import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa'; // import da "font-awesome" para usar ícones

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'; 

import './Main.css';

export default class Main extends Component {
    state = { // estado do componente. Todas as chaves aqui dentro vão ser o estado do componente. Tudo o que mudar nesse estado reflete no render
        novaTarefa: "", // inicializa o estado
        tarefas: []
    };

    handleSubmit = (e) => {
        e.preventDefault(); // previne o comportamento padrão do formulário
        const { tarefas } = this.state; // Destructuring. Equivale a const tarefas = this.state.tarefas;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); // remove espaços em branco no início e no final

        if (tarefas.indexOf(novaTarefa) !== -1) return; // se a tarefa já existe, não adiciona

        const novasTarefas = [...tarefas]; // copia as tarefas atuais

        this.setState({
            tarefas: [...novasTarefas, novaTarefa] // adiciona a nova tarefa
        });
    }

    handleChange = (e) => { // método como arrow function para ter o this do componente (bind do this)
        this.setState({
            novaTarefa: e.target.value // e.target é o input. value é o valor do input
        });
    }

    render() {

        const { novaTarefa, tarefas } = this.state; // Destructuring. Equivale a const novaTarefa = this.state.novaTarefa;

        return (
            <div className="main"> {/* "className" porque "class" é uma palavra reservada do JS */} 
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus /> {/* Ícone de adicionar */}
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa => (
                        <li key={tarefa}> {/* key é um identificador único, o React obriga isso */}
                            {tarefa}
                            <span>
                                <FaEdit className="edit" />
                                <FaWindowClose className="delete" />
                            </span>
                        </li> 
                    ))}
                </ul>

            </div> 
        );
    }
}