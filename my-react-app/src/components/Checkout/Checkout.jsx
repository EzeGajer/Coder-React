import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Precio: ${item.precio}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Checkout;
