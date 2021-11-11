import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    height: 4rem;
    width: 40vw;
    padding: 3rem 2rem;
    margin: 0.3rem;
`

const CardPequenoImagem = styled.img `
    height: 2rem;
    margin-right: 2rem;

`


export const CardPequeno = (props) => {
    return (
        <CardPequenoContainer>
            <CardPequenoImagem src={props.imagem}/>
            <p>{props.texto}</p>
        </CardPequenoContainer>
    )
}