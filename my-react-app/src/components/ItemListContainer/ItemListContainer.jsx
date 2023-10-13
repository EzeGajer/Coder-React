import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=18')
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
      <Grid container spacing={3}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="140"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {pokemon.name}
                </Typography>
                <Link to={`/pokemon/${pokemon.name}`}>
                  <Button variant="contained" color="primary">
                    Detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemListContainer;

