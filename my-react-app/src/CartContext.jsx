import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]; // Agrega un producto al carrito
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload); // Elimina un producto del carrito
    case 'CLEAR_CART':
      return []; // Borra todos los productos del carrito
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <CartContext.Provider value={{ cart, total, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
