import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Typography, Grid, CircularProgress } from '@mui/material';


const PokemonDetail = ({ pokemonName }) => {
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
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader title={pokemon.name} />
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
            {/* Agrega más detalles según sea necesario */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;
