import { useState } from "react";
import style from "../styles/home.module.css";
import { FilterBar } from "./Filterbar";
import { PokeGrid } from "./PokeGrid";
import Pokedex from "pokedex-promise-v2";
import { useEffect } from "react";
const P = new Pokedex();

export const Home = ({ pokemon, setPokemon }) => {
  const [gameVersion, setGameVersion] = useState("national");

  useEffect(() => {
    P.getPokedexByName(gameVersion).then(({pokemon_entries}) => {
      setPokemon(pokemon_entries);
    });
  }, [gameVersion]);

  return (
    <>
      <FilterBar gameVersion={gameVersion} setGameVersion={setGameVersion} />
      <PokeGrid pokemon={pokemon} />
      
    </>
  );
};
