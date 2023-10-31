import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ItemDetail;
