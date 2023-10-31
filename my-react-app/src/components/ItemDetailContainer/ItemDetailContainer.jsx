import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const itemCollection = collection(db, "items");
      const itemSnapshot = await getDocs(itemCollection);
      const itemData = itemSnapshot.docs.find((doc) => doc.id === itemId)?.data();
      setItem(itemData);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
