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
          <p>Precio: ${item.price}</p>
          {/* Otros detalles del producto */}
        </div>
      ))}
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
      {/* Agrega un formulario para completar la compra */}
    </div>
  );
};

export default Checkout;
