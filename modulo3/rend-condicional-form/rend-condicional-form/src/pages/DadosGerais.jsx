import React from "react";

export class DadosGerais extends React.Component {
    state = {
        nome: '',
        idade: '',
        email: '',
        escolaridade: '',
    }

    handleName = (event) => {
        this.setState({
            nome: event.target.value
        })   
    }

    handleAge = (event) => {
        this.setState({
            idade: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleEscolaridade = (event) => {
        this.setState({
            escolaridade: event.target.value
        })
    }

    render () {

        return (
                    <div>
                        <h1>Etapa 1 - Dados Gerais</h1>
                        <h3>Qual é o seu nome?</h3>
                        <input placeholder="nome" value={this.state.nome} onChange={this.handleName}/>
                        <h3>Qual é a sua idade?</h3>
                        <input placeholder="idade" value={this.state.idade} onChange={this.handleAge}/>
                        <h3>Qual é o seu email?</h3>
                        <input placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
                        <h3>Qual é a sua escolaridade?</h3>
                        <select value={this.state.escolaridade} onChange={this.handleEscolaridade}>
                            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        </select>
                        <button onClick={this.props.handleClick1}>Próxima Etapa</button>
                    </div>
        )
    }
    
}