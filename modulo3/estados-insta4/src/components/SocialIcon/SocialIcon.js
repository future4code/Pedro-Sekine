import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin: 0.5rem;
    height: 1.5rem;
`

export function SocialIcon (props) {
    let nome = props.nome
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={console.log(`Post compartilhado no ${props.nome}`)}/>
	</IconContainer>
}
