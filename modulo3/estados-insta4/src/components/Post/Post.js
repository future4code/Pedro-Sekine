import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarPreto from '../../img/bookmark_black_24dp.svg'
import iconeSalvarBranco from '../../img/bookmark_border_black_24dp.svg'
import iconeCompartilhar from '../../img/ios_share_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoShare} from '../SecaoShare/SecaoShare'

const SocialContainer = styled.div `
  display: flex;
  justify-content: space-around;
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentarioFinal: '',
    salvo: false,
    compartilhamento: false,
    nome: ''
    // comentandoShare: false, // relevante?
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      numeroCurtidas: this.somaCurtida(),
      curtido: !this.state.curtido,
        
    })
    console.log(this.state.numeroCurtidas)
  }

  somaCurtida = () => {
    if (this.state.curtido) {
      return (this.state.numeroCurtidas = this.state.numeroCurtidas - 1)
    } else {
      return (this.state.numeroCurtidas = this.state.numeroCurtidas + 1)
    }
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
/* Essa função tem o papel de inverter o valor do estado de {comentando}, ou seja, de true
para false ou de false para true. Essa alteração de estado faz com que a variável 
{componenteComentario} armazene ou não o componente {SecaoComentario}, mostrando ou não 
o input de texto para o usuário que está navegando pela tela.  */

  onClickSalvar = () => {
    this.setState ({
      salvo: !this.state.salvo
    })
  }

  onClickCompartilhar = () => {
    this.setState ({
      compartilhamento: !this.state.compartilhamento
    })
  }

  aoEnviarShare = () => {
    this.setState({
      compartilhamento: false
    })
  }

  aoEnviarComentario = (valor) => {
    this.setState({
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarioFinal: valor
    })
    console.log(valor)

  }

 


  render() {

    let componenteComentario

    /* Abaixo é possível ver a aplicação da função {aoEnviarComentario} */
    if(this.state.comentando) {
      componenteComentario = 
      <div>
      <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
      <div>{this.state.comentarioFinal}</div>
      </div>
    }


    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar

    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let comentandoShare
  
    let componenteCompartilhamento

    if (this.state.compartilhamento) {
      comentandoShare = <SecaoShare aoEnviar={this.aoEnviarShare} /> // 🔴
    }

  // Essa condicional dentro de um componente é uma novidade. Ela está dentro da declaração
  // de uma variável e a variável é chamada no return. 

    return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      {/* icone, onClickIcone e valorContador são props do componente IconeComContador.
      Ao mesmo tempo, o que é mais interessantes, dois deles são estados do componente Post
      Ou seja, estados de um componente podem ser usados como props de outro.*/}
      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador // mudar isso aqui
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

      </PostFooter>
      {componenteComentario}
      {comentandoShare}
    </PostContainer>
    )
  }
}

export default Post