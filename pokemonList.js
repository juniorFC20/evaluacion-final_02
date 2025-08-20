import React from "react";
import PokemonCard from "./pokemonCard";

function PokemonList({ pokemones, onDelete }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {pokemones.map((p) => (
        <PokemonCard key={p._id} pokemon={p} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PokemonList;

