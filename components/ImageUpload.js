// components/ImageUpload.js
import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button, Input } from '@mui/material';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl); // Use this URL to update Firebase with the image URL
  };

  return (
    <form onSubmit={handleImageUpload}>
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <Button type="submit">Upload Image</Button>
    </form>
  );
};

export default ImageUpload;
