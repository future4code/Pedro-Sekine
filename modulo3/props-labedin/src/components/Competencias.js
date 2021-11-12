import React from 'react';
import styled from 'styled-components';

const CompetenciasContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
    height: 4rem;
    width: 40vw;
    padding: 3rem 2rem;
    margin: 0.3rem;
`

export const Competencias = (props) => {
    return (
        <CompetenciasContainer>
            <p>{props.comp1}</p>
            <p>·</p>
            <p>{props.comp2}</p>
            <p>·</p>
            <p>{props.comp3}</p>
            <p>·</p>
            <p>{props.comp4}</p>
            <p>·</p>
            <p>{props.comp5}</p>

        </CompetenciasContainer>
    )
}