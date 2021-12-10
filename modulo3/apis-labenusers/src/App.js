import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import axios from "axios";
import { ListaDeUsuarios } from "./pages/ListaDeUsuarios";

class App extends React.Component {
  state = {
    name: "",
    email: "",
    getListaDeUsuarios: [],
    pagina: 0,
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onClickEnviar = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
        {
          name: this.state.name,
          email: this.state.email,
        },
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert(`Usuário criado com Sucesso`);
      })
      .catch((error) => {
        console.log(error.data);
        alert(`Erro`);
      });
  };

  getListaDeUsuarios = (responseProps) => {
    this.setState({
      getListaDeUsuarios: responseProps,
    });
  };

  onClickDeletar = (object) => {
    console.log("objeto passando", object);

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${object.id}
      `,
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  toHome = () => {
    this.setState({
      pagina: 0,
    });
  };

  toLista = () => {
    this.setState({
      pagina: 1,
    });
  };

  render() {

    let renderedPage

    if (this.state.pagina === 0) {
      renderedPage = (
        <Home
          name={this.state.name}
          onChangeName={this.onChangeName}
          email={this.state.email}
          onChangeEmail={this.onChangeEmail}
          onClickEnviar={this.onClickEnviar}
        />
      );
    } else if (this.state.pagina === 1) {
      renderedPage = (
        <ListaDeUsuarios
          getListaDeUsuarios={this.getListaDeUsuarios}
          showListaDeUsuarios={this.state.getListaDeUsuarios}
          onClickDeletar={this.onClickDeletar}
        />
      );
    }

    return (
      <div>
        <button onClick={this.toHome}>Criar usuário</button>
        <button onClick={this.toLista}>Lista de usuários</button>
        {renderedPage}
      </div>
    );
  }
}

export default App;
