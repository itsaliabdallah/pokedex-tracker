import { Link } from "react-router-dom";
import style from "../styles/pokegriditem.module.css";

export const PokeGridItem = ({ pokeman }) => {
  let id = ("00" + pokeman.entry_number).slice(-3);
  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

  return (
    <>
      <Link to={`/pokemon/${pokeman.pokemon_species.name}`}>
        <div className={style.container}>
          <h3> {pokeman.pokemon_species.name}</h3>
          <h4>{pokeman.entry_number}</h4>
          <img src={img} alt={pokeman.name} />
        </div>
      </Link>
    </>
  );
};
