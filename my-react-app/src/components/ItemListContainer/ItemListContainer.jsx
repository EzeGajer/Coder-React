import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "items"));
      const querySnapshot = await getDocs(q);
      const itemsData = [];
      querySnapshot.forEach((doc) => {
        itemsData.push(doc.data());
      });
      setItems(itemsData);
    };
    getItems();
  }, []);

  return (
    <div className="item-list-container">
      <h1>Nuestros Productos</h1>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                <Button variant="contained" color="primary">
                  Ver Detalles
                </Button>
                {/* Agrega un botón para agregar al carrito si lo deseas */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ItemListContainer;
