import React, {Component} from 'react'
import styled from 'styled-components'
import {SocialIcon} from '../SocialIcon/SocialIcon'
import iconeFacebookStd from '../../img/facebook-app-logo.png'
import iconeInstagramStd from '../../img/instagram (1).png'
import iconeTwitterStd from '../../img/twitter-sign.png'
import iconeFacebookWhite from '../../img/facebookwhite.png'
import iconeInstagramWhite from '../../img/instagramwhite.png'
import iconeTwiterWhite from '../../img/twitterwhite.png'


const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`



export class SecaoShare extends Component {
	state = {
		value: '',
		nome: ''
	}

	onClickIconeFacebook = () => {
		this.setState({
		  nome:'Facebook'
		})
		// console.log('Post compartilhado no Facebook')
	  }
	  
	  onClickIconeInstagram = () => {
		this.setState({
		  nome:'Instagram'
		})
		// console.log('Post compartilhado no Instagram')
	  }
	
	  onClickIconeTwitter = () => {
		this.setState({
		  nome:'Twitter'
		})
		// console.log('Post compartilhado no Twitter')
	  }

	onChangeComentario = (event) => {
		this.setState ({
			value: event.target.value,
		})
		// console.log(event.target.value)
		// 🔴 Muito estranho que o valor do console.log é sempre o do estado anterior
	}

	aoClicarShare = () => {
		console.log(`Post Compartilhado no ${this.state.nome} com a mensagem: "${this.state.value}"`)
	}

	render() {
		
		
		let iconeFacebook
		let iconeInstagram
		let iconeTwitter

		if (this.state.nome === 'Facebook') {
			iconeFacebook = iconeFacebookWhite
			iconeInstagram = iconeInstagramStd
			iconeTwitter = iconeTwitterStd
		} else if (this.state.nome === 'Instagram') {
			iconeFacebook = iconeFacebookStd
			iconeInstagram = iconeInstagramWhite
			iconeTwitter = iconeTwitterStd
		} else if (this.state.nome === 'Twitter'){
			iconeFacebook = iconeFacebookStd
			iconeInstagram = iconeInstagramStd
			iconeTwitter = iconeTwiterWhite
		} else {
			iconeFacebook = iconeFacebookStd
			iconeInstagram = iconeInstagramStd
			iconeTwitter = iconeTwitterStd
		}



		return <CommentContainer>
			<SocialIcon
				nome='Facebook'
				icone={iconeFacebook}
				onClickIcone={this.onClickIconeFacebook}
				/>
			<SocialIcon
				nome='Instagram'
				icone={iconeInstagram}
				onClickIcone={this.onClickIconeInstagram}
			/>
			<SocialIcon
				nome='Twitter'
				icone={iconeTwitter}
				onClickIcone={this.onClickIconeTwitter}
			/>
			<InputComentario placeholder={'Comentário'} value={this.state.value} onChange={this.onChangeComentario} />
			<button onClick={this.props.aoEnviar} onClick={this.aoClicarShare} >Enviar</button>
		</CommentContainer>
	}
}
