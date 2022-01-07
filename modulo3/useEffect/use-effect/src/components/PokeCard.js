import axios from "axios";
import react, { useState, useEffect } from "react";
import styled from "styled-components";

export function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon()
  }, [])

  useEffect(() => {
    // if (props.pokemon !== dataPokemon.data.name)
    pegaPokemon(props.pokemon)
  } , [props.pokemon])

  const pegaPokemon = async () => {
    try {
      const dataPokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
      );
      setPokemon(dataPokemon.data);
      // console.log(dataPokemon.data.name)
      // console.log(props.pokemon)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
