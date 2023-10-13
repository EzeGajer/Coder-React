import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Type from './pages/Type';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    // Obtiene la lista de tipos de Pokémon
    axios.get('https://pokeapi.co/api/v2/type')
      .then((response) => {
        setPokemonTypes(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <NavBar pokemonTypes={pokemonTypes} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type/:typeName" element={<Type />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
