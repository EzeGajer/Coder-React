// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/subcategoria/:subcategory" element={<ItemListContainer />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
