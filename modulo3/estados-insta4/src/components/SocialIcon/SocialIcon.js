import React from 'react'
import styled from 'styled-components'

const IconImage = styled.img`
	margin: 0.5rem;
    height: 1.5rem;
`

export function SocialIcon (props) {
    let nome = props.nome
	return <IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
}
