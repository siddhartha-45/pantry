// components/PantryList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PantryList = ({ queryText }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'pantryItems'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(itemsArray);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id));
  };

  return (
    <List>
      {items
        .filter((item) => item.name.toLowerCase().includes(queryText.toLowerCase()))
        .map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
    </List>
  );
};

export default PantryList;
