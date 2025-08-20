import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonForm from "./components/pokemonForm";
import PokemonList from "./components/pokemonList";

const API_URL = "http://localhost:3000/api/pokemones";

function App() {
  const [pokemones, setPokemones] = useState([]);

  const fetchPokemones = async () => {
    try {
      const res = await axios.get(API_URL);
      setPokemones(res.data);
    } catch (err) {
      console.error("Error al obtener pokemones:", err);
    }
  };

  const addPokemon = async (pokemon) => {
    try {
      const res = await axios.post(API_URL, pokemon);
      setPokemones([...pokemones, res.data]);
    } catch (err) {
      console.error("Error al agregar pokemon:", err);
    }
  };

  const deletePokemon = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPokemones(pokemones.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error al eliminar pokemon:", err);
    }
  };

  useEffect(() => {
    fetchPokemones();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        ⚡ Pokedex 
      </h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <PokemonForm onAdd={addPokemon} />
      </div>

      <PokemonList pokemones={pokemones} onDelete={deletePokemon} />
    </div>
  );
}

export default App;
