import React from "react";

export class SupTrue extends React.Component {
    state ={
        curso: '',
        unidadeDeEnsino: '',
    }

    handleCurso = (event) => {
        this.setState({
            curso: event.target.value
        })
    }

    handleUnidadeDeEnsino = (event) => {
        this.setState ({
            unidadeDeEnsino: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <h3>Qual curso?</h3>
                <input placeholder='curso' onChange={this.handleCurso} value={this.state.curso}/>
                <h3>Qual a unidade de ensino?</h3>
                <input placeholder='unidade de ensino' onChange={this.handleUnidadeDeEnsino} value={this.state.unidadeDeEnsino}/>
                <button onClick={this.props.handleClick2}>Próxima Etapa</button>
            </div>
        )
    }
}