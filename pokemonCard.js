import React from "react";

function PokemonCard({ pokemon, onDelete }) {
  return (
    <div
      style={{
        border: "2px solid #fcb69f",
        borderRadius: "12px",
        padding: "15px",
        background: "white",
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ margin: "10px 0", color: "#333" }}>{pokemon.nombre}</h3>
      <p>🔥 Tipo: {pokemon.tipo}</p>
      <p>⭐ Nivel: {pokemon.nivel}</p>
      <button
        onClick={() => onDelete(pokemon._id)}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          background: "#ff4b2b",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🗑️ Eliminar
      </button>
    </div>
  );
}

export default PokemonCard;
