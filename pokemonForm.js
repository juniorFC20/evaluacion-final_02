import React, { useState } from "react";

function PokemonForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [nivel, setNivel] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !tipo) return;
    onAdd({ nombre, tipo, nivel });
    setNombre("");
    setTipo("");
    setNivel(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Nivel"
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={btnStyle}>
        ➕ Agregar
      </button>
    </form>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
};

const btnStyle = {
  padding: "10px",
  background: "linear-gradient(to right, #ff416c, #ff4b2b)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};

export default PokemonForm;
