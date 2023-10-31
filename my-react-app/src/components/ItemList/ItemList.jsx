import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, "items");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsData = itemsSnapshot.docs.map((doc) => doc.data());
      setItems(itemsData);
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
              alt={item.name}
              height="140"
              image={`/images/${item.id}.jpg`} // Cambia la ruta según dónde almacenas las imágenes
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Precio: ${item.price}
              </Typography>
              <Link to={`/item/${item.id}`}>
                <Button variant="contained" color="primary">
                  Detalles
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
