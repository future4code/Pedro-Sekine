import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem ;

`

const InputField = styled.input`
  margin-right: 0.5rem;
`


class App extends React.Component {
  state = {
    publicacao: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'pedrinho',
        fotoUsuario: 'https://picsum.photos/id/237/50/50',
        fotoPost: 'https://picsum.photos/id/500/200/150'
      },
      {
        nomeUsuario: 'zezinho',
        fotoUsuario: 'https://picsum.photos/id/800/50/50',
        fotoPost: 'https://picsum.photos/id/930/200/150'
      }
    ],
    valueNomeUsuario: "",
    valueFotoUsuario: "",
    valueFotoPost: "",
  }

  onChangeValueNomeUsuario = (event) => {
    this.setState({valueNomeUsuario: event.target.value})
  }

  onChangeValueFotoUsuario = (event) => {
    this.setState({valueFotoUsuario: event.target.value})
  }

  onChangeValueFotoPost = (event) => {
    this.setState({valueFotoPost: event.target.value})
  }

  onClickPublicar = () => {

    const novaPublicacao = {
      nomeUsuario: this.state.valueNomeUsuario,
      fotoUsuario: this.state.valueFotoUsuario,
      fotoPost: this.state.valueFotoPost
    }

    this.setState({
      publicacao: [novaPublicacao, ...this.state.publicacao]
    })
  }

  render() {

    const arrayDeComponentes = this.state.publicacao.map((objeto) => {
      return(
        <MainContainer>
          <Post 
            nomeUsuario={objeto.nomeUsuario}
            fotoUsuario={objeto.fotoUsuario}
            fotoPost={objeto.fotoPost}
          />
        </MainContainer>
      )
    })



    return (
      <div>
        <FormContainer>
          <InputField 
            placeholder="Nome do Usuário"
            value={this.state.valueNomeUsuario}
            onChange={this.onChangeValueNomeUsuario}
          />

          <InputField
            placeholder="Link da Foto do Usuário"
            value={this.state.valueFotoUsuario}
            onChange={this.onChangeValueFotoUsuario}
          />

          <InputField
            placeholder="Link da Foto do Post"
            value={this.state.valueFotoPost}
            onChange={this.onChangeValueFotoPost}
          />

          <button onClick={this.onClickPublicar} >Publicar</button>
        </FormContainer>

        {arrayDeComponentes}
      </div>
    );
  }
}

export default App;
