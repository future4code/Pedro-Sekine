import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
`;

const ImageList = styled.img`
  height: 2rem;
`;

export function Matches(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatchList();
  }, []);

  const getMatchList = async () => {
    try {
      const matchList = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:pedro-sekine-joy/matches"
      );
      setMatches(matchList.data.matches);
      console.log(matchList);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickChoose = () => {
    props.page("choose");
  };

  const onClickReset = async () => {
    try {
      const resetVariable = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:pedro-sekine-joy/clear",
      {
        headers: {
          "Content-Type": "application/json",
        }
      })
      setMatches([])
      console.log("resetVariable", resetVariable)
    } catch (error) {
      console.log(error)
    }
    
  }

  console.log("matches", matches);
  const matchComponent = matches.map((person) => {
    return (
      <PersonContainer>
        <ImageList src={person.photo} />
        <div>
          <h3>{person.name}</h3>
          <p>{person.age}</p>
        </div>
      </PersonContainer>
    );
  });

  return (
    <div>
      <TopContainer>
        <button onClick={onClickChoose}>Choose</button>
        <button onClick={onClickReset}>Resetar Escolhas</button>
      </TopContainer>
      {matchComponent}
    </div>
  );
}
