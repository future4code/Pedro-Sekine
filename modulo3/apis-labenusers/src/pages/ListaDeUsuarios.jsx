import axios from "axios";
import React from "react";


export class ListaDeUsuarios extends React.Component {

  componentDidMount () {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
      headers: {
        Authorization: "pedro-sekine-joy"
      }
    }).then((response) => {
      this.props.getListaDeUsuarios(response.data)

      console.log("resposta Did Mount", response.data)

    }).catch((error) => {
      console.log("erro Did Mount", error)
    })
  }

  onClickDeletar = (object) => {
    this.props.onClickDeletar(object)
  }


  render(){

    const showListaDeUsuarios = this.props.showListaDeUsuarios.map(object => {
      return (
        <div key={object.id}>
          {object.name}
          <button onClick={() => this.onClickDeletar(object)}>Deletar</button>
        </div>
      )
    })

    return(
      <div>{showListaDeUsuarios}</div>
    )
  }
}