import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10') // Limitamos a 10 Pokémon para este ejemplo
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <div className="pokemon-card">{pokemon.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

