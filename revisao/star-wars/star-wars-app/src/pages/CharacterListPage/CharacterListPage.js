import axios from "axios";
import react, { useState, useEffect } from "react";
import { FrameCharacter } from "./styled";

export function CharacterListPage(props) {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacterList();
    console.log("passou pelo useEffect");
  }, []);

  const getCharacterList = async () => {
    try {
      const url = "https://swapi.py4e.com/api/people";
      const listPull = await axios.get(url);
      setCharacterList([...listPull.data.results]);
      console.log("characterList", characterList);
      console.log("listPull", listPull);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("characterList fora", characterList);

  const handleClick = (url) => {
    props.propsGoToDetailPage(url)
  }


  let characterComponent;

  if (characterList) {
    characterComponent = characterList.map((character) => {
      return (
        <div key={character.name}>
          <FrameCharacter onClick={() => handleClick(character.url)} >nome: {character.name}</FrameCharacter>
          {/* aqui é para colocar um onClick com a URL do personagem */}
        </div>
      );
    });
  }

  return (
    <div>
      <h1>CharacterListPage</h1>
      <p>{characterComponent}</p>
    </div>
  );
}
