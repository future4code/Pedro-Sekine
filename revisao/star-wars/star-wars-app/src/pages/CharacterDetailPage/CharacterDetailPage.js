import axios from "axios";
import react, { useState, useEffect } from "react";

export function CharacterDetailPage(props) {
  const [CharacterData, setCharacterData] = useState([]);
  const [planet, setPlanet] = useState("");

  useEffect(() => {
    getCharacterData();
  }, []);

  useEffect(() => {
    getPlanet()
  }, [CharacterData])

  const getCharacterData = async () => {
    try {
      const responseData = await axios.get(props.detailURL);
      setCharacterData(responseData.data);
      console.log(CharacterData);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlanet = async () => {
    try {
      const url = CharacterData.homeworld
      console.log("url", url)
      const responsePlanet = await axios.get(url);
      console.log("responsePlanet", responsePlanet);
      setPlanet(responsePlanet.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (CharacterData) {
    console.log(CharacterData);
    // getPlanet()
    console.log("planet.name", planet.name)
  }

  return (
    <div>
      <p>Nome: {CharacterData.name}</p>
      <p>Planeta Natal: {planet.name}</p>
    </div>
  );
}
