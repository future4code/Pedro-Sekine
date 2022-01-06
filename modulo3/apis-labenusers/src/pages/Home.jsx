import React from "react";
import axios from "axios";
import { ListaDeUsuarios } from "./ListaDeUsuarios";

export class Home extends React.Component {
  onChangeName = (event) => {
    this.props.onChangeName(event);
  };

  onChangeEmail = (event) => {
    this.props.onChangeEmail(event);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          value={this.props.name}
          onChange={this.onChangeName}
        />
        <input
          placeholder="Email"
          value={this.props.email}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.props.onClickEnviar}>enviar</button>        
      </div>
    );
  }
}
