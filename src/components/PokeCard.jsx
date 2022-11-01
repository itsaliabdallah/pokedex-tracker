import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/pokecard.module.css";
import Pokedex from "pokedex-promise-v2";
import { useState } from "react";
const P = new Pokedex();

export const PokeCard = ({ pokemon }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentPokemonLocation, setCurrentPokemonLocation] = useState({});
  const { pokemonName } = useParams();

  let id = ("00" + currentPokemon.id).slice(-3);
  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;


  useEffect(() => {
    P.getPokemonByName(pokemonName).then((data) => {
        setCurrentPokemon(data)
    }).then(()=>{
       return P.getResource(`api/v2/pokemon/${currentPokemon.id}/encounters`)
    }).then((data)=>{
        setCurrentPokemonLocation(data)
    });
  }, [pokemonName]);

  console.log(currentPokemonLocation)

  return (
    <>
      <h2>{currentPokemon.name}</h2>
      <h3>{currentPokemon.id}</h3>
      <h4></h4>
      <img src={img} alt={currentPokemon.name} />
      

    </>
  );
};
