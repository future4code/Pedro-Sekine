import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { PokeCard } from "./components/PokeCard";


function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const ListAPI = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      setPokeList(ListAPI.data.results);
      console.log("o resultado é ", ListAPI.data.results);
      console.log("a lista pokemon é ", pokeList);
    } catch (error) {
      console.log(error);
    }
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
    console.log("o event.target.value é ", event.target.value)
    console.log("o pokeName é ", pokeName)
  };

  const optionList = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {optionList}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
