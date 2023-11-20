// ItemListContainer.jsx

import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { Grid, Card, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const { category, subcategory } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        let itemQuery;

        if (category && subcategory) {
          itemQuery = query(collection(db, 'items'), where('categoria', '==', category), where('subcategoria', '==', subcategory));
        } else if (category) {
          itemQuery = query(collection(db, 'items'), where('categoria', '==', category));
        } else {
          itemQuery = query(collection(db, 'items'));
        }

        const querySnapshot = await getDocs(itemQuery);
        const itemsData = querySnapshot.docs.map((doc) => doc.data());
        setItems(itemsData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      }
    };

    getItems();
  }, [category, subcategory]);

  return (
    <div className="item-list-container">
      <h1>{category ? `Categoría: ${category}` : 'Nuestros Productos'}</h1>
      <div className="spinner-container">
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.ID}>
                <Card className="product-card">
                  <CardMedia
                    component="img"
                    alt={item.nombre}
                    height="250"
                    image={item.imagen}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.nombre}</Typography>
                    <Typography variant="body1">Precio: ${item.precio}</Typography>
                    <Link to={`/items/${item.ID}`} key={item.id}>
                      <Button variant="contained" color="primary">
                        Ver Detalles
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
