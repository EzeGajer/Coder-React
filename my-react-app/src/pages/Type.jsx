import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Type = () => {
  const { typeName } = useParams();
  const [pokemonOfType, setPokemonOfType] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/${typeName}`)
      .then((response) => {
        // Filtrar para obtener solo los primeros 12 Pokémon
        const first12Pokemon = response.data.pokemon.slice(0, 6);
        setPokemonOfType(first12Pokemon);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [typeName]);

  return (
    <div>
      <h1>{typeName} Type Pokémon</h1>
      <Grid container spacing={3}>
        {pokemonOfType.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.pokemon.name}>
            <Card>
              <CardMedia
                component="img"
                alt={pokemon.pokemon.name}
                height="140"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/').slice(-2, -1)}.png`}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {pokemon.pokemon.name}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component="a"  // Usar "a" en lugar de "Link"
                  href={`/pokemon/${pokemon.pokemon.name}`}
                >
                  Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Type;
