import React, { Component } from "react";
import Form from './Form'; // importa o componente Form
import Tarefas from "./Tarefas";

import './Main.css';

export default class Main extends Component {
    state = { // estado do componente. Todas as chaves aqui dentro vão ser o estado do componente. Tudo o que mudar nesse estado reflete no render
        novaTarefa: "", // inicializa o estado
        tarefas: [],
        index: -1 // se o index for -1, não está editando
    };

    componentDidMount() { // função que é chamada uma vez quando o componente é montado
      const tarefas = JSON.parse(localStorage.getItem('tarefas')); // pega as tarefas do localStorage

      if (!tarefas) return; // se não tiver tarefas, não faz nada

      this.setState({ tarefas }); // atualiza o estado com as tarefas do localStorage
    }

    componentDidUpdate(prevProps, prevState) { // função que é chamada toda vez que o componente é atualizado. Recebe as props e o estado anterior
      const { tarefas } = this.state;

      if (tarefas === prevState.tarefas) return; // se as tarefas não mudaram, não faz nada

      localStorage.setItem('tarefas', JSON.stringify(tarefas)); // salva as tarefas no localStorage
    }

    handleSubmit = (e) => {
        e.preventDefault(); // previne o comportamento padrão do formulário
        const { tarefas, index } = this.state; // Destructuring. Equivale a const tarefas = this.state.tarefas;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); // remove espaços em branco no início e no final

        if (tarefas.indexOf(novaTarefa) !== -1) return; // se a tarefa já existe, não adiciona

        const novasTarefas = [...tarefas]; // copia as tarefas atuais

        if (index === -1) { // se não está editando
            this.setState({
                tarefas: [...novasTarefas, novaTarefa], // adiciona a nova tarefa
                novaTarefa: "", // limpa o input
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
            });
        }

    };


    handleChange = (e) => { // método como arrow function para ter o this do componente (bind do this)
        this.setState({
            novaTarefa: e.target.value // e.target é o input. value é o valor do input
        });
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index, // index: index
            novaTarefa: tarefas[index], // preenche o input com a tarefa que está sendo editada
        });
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1); // remove 1 elemento a partir do index

        this.setState({
            tarefas: [...novasTarefas],
        });
    }

    render() {

        const { novaTarefa, tarefas } = this.state; // Destructuring. Equivale a const novaTarefa = this.state.novaTarefa;

        return (
            <div className="main"> {/* "className" porque "class" é uma palavra reservada do JS */}
                <h1>Lista de tarefas</h1>

                <Form
                  handleSubmit={this.handleSubmit} // passa o método para o componente Form
                  handleChange={this.handleChange}
                  novaTarefa={novaTarefa} // passa o estado para o componente Form
                />

                <Tarefas
                  tarefas={tarefas} // passa o estado para o componente Tarefas
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />

            </div>
        );
    }
}
