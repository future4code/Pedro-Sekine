import React, {Component} from 'react'
import styled from 'styled-components'


const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		value: ''
	}

	onChangeComentario = (event) => {
		this.setState ({value: event.target.value})
		console.log(event.target.value)
	}

	handleOnClick = () => {
		this.props.aoEnviar(this.state.value)
	}


	render() {

		return ( 
		<div>
			<CommentContainer>
				<InputComentario placeholder={'Comentário'} value={this.state.value} onChange={this.onChangeComentario} />
				<button onClick={this.handleOnClick}>Enviar</button>
			</CommentContainer>
		</div>


		)
	}
}
