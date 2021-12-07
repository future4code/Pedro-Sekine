import React from "react";

export class SupFalse extends React.Component {
    state ={
        pqGrad: '',
        cursoComplementar: '',
    }

    handleChange = (event) => {
        this.setState({
            pqGrad: event.target.value
        })
    }

    handleSelect = (event) => {
        this.setState({
            cursoComplementar: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <h3>Por que você não terminou um curso de graduação?</h3>
                <input value={this.state.pqGrad} onChange={this.handleChange} />
                <h3>Você fez algum curso complementar?</h3>
                <select value={this.state.cursoComplementar} onChange={this.handleSelect}>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso Técnico">Curso Técnico</option>
                    <option value="Curso de Inglês">Curso de Inglês</option>
                </select>
                <button onClick={this.props.onClick3}>Próxima Etapa</button>
            </div>
        )
    }
}