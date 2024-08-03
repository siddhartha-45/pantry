// components/PantryItemForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { TextField, Button } from '@mui/material';

const PantryItemForm = ({ existingItem, onSave }) => {
  const [name, setName] = useState(existingItem ? existingItem.name : '');
  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (existingItem) {
      await updateDoc(doc(db, 'pantryItems', existingItem.id), { name, quantity });
    } else {
      await addDoc(collection(db, 'pantryItems'), { name, quantity });
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <Button type="submit">{existingItem ? 'Update' : 'Add'} Item</Button>
    </form>
  );
};

export default PantryItemForm;
