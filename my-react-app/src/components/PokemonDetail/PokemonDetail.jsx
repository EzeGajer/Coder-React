import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Typography, Grid, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon details:', error);
      });
  }, [pokemonName]);

  if (!pokemon) {
    return <CircularProgress />;
  }

  return (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader title={`Detalle de ${pokemon.name}`} />
        <img
          src={pokemon.sprites.front_default} // Cambia esto por la URL de la imagen del Pokémon
          alt={pokemon.name}
          style={{
            display: 'block',
            margin: '0 auto',
            paddingTop: '16px',
            width: '170px', // Añade esta línea para ajustar el tamaño de la imagen al máximo ancho permitido
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Pokémon ID: {pokemon.id}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Height: {pokemon.height}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Weight: {pokemon.weight}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);
};

export default PokemonDetail;
