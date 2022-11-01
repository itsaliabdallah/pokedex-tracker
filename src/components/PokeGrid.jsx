import style from "../styles/pokegrid.module.css";
import Pokemon from "../pokemon.json";
import { PokeGridItem } from "./PokeGridItem";

export const PokeGrid = ({pokemon}) => {

  return (
    <div className={style.container}>
      {pokemon.map((pokeman, index) => {
        return <PokeGridItem pokeman={pokeman} key={index} />;
      })}
    </div>
  );
};
