import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "items");
        const itemsQuery = query(itemsCollection);
        const itemsSnapshot = await getDocs(itemsQuery);
        const itemsData = itemsSnapshot.docs.map((doc) => doc.data());
        setItems(itemsData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              alt={item.nombre}
              image={item.imagen}
              height="140"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.nombre}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Precio: ${item.precio}
              </Typography>
              <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Ver Detalle
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
