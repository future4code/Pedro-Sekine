import logo from './logo.svg';
import './App.css';
import {DadosGerais} from './pages/DadosGerais.jsx'
import React from 'react';
import { SupTrue } from './pages/SupTrue';
import { SupFalse } from './pages/SupFalse';
import { Final } from './pages/Final';


class App extends React.Component {
  
  state ={
    step1: false,
    step2: false,
    step3: false,
  }

  handleClick1 = () => {
    this.setState({
      step1: true
    })
  }

  handleClick2 = () => {
    this.setState({
      step2: true
    })
  }

  onClick3 = () => {
    this.setState({
      step3: true
    })
  }


  render () {

    let pagina = <h1>Página de Erro</h1>

    if (!this.state.step1){
      pagina = <DadosGerais handleClick1={this.handleClick1}/>
    } else if (this.state.step1 === true && this.state.step2 === false) {
      pagina = <SupTrue handleClick2={this.handleClick2}/>
    } else if (this.state.step3 === false && (this.state.step1 && this.state.step2)) {
      pagina = <SupFalse onClick3={this.onClick3}/>
    } else if (this.state.step1 && this.state.step2 && this.state.step3) {
      pagina = <Final />
    }

    return (
      <div className="App">
        {pagina}
      </div>
    )
  }
}
  

export default App;
