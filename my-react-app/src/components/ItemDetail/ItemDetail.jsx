import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(db, 'items', id);
        const itemSnapshot = await getDoc(itemDoc);
        console.log('Item Snapshot:', itemSnapshot);
  
        if (itemSnapshot.exists()) {
          setItem(itemSnapshot.data());
        } else {
          console.log('No se encontró el artículo con el ID:', id);
        }
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };
  
    fetchItem();
  }, [id]);
  

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : item ? (
        <div>
          <Typography variant="h4">{item.nombre}</Typography>
          <img src={item.imagen} alt={item.nombre} />
          <Typography variant="body1">{item.descripcion}</Typography>
          <Typography variant="body2">Precio: ${item.precio}</Typography>
          <Typography variant="body2">Stock: {item.stock}</Typography>
        </div>
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ItemDetail;
