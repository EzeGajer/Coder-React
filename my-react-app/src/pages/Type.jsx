import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Type = () => {
  const { typeName } = useParams();
  const [pokemonOfType, setPokemonOfType] = useState([]);

  useEffect(() => {
    // Obtiene la lista de Pokémon de un tipo específico
    axios.get(`https://pokeapi.co/api/v2/type/${typeName}`)
      .then((response) => {
        setPokemonOfType(response.data.pokemon);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [typeName]);

  return (
    <div>
      <h1>{typeName} Type Pokémon</h1>
      <ul>
        {pokemonOfType.map((pokemon) => (
          <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Type;
