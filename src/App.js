import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { PokeCard } from "./components/PokeCard";


function App() {
  const [pokemon, setPokemon] = useState([]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon} setPokemon={setPokemon} />} />
        <Route
          path="/pokemon/:pokemonName"
          element={<PokeCard pokemon={pokemon} />}
        />
      </Routes>
    </div>
  );
}

export default App;
