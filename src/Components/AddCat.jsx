import React, { useState } from 'react';
import {
  FormControl,
  Button,
  FormLabel,Box,
  Input,
  Textarea,
  Select
} from '@chakra-ui/react';
import axios from 'axios';

const AddCat = () => {
  const [file, setFile] = useState(null);
  const [name, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [uploading, setUploading] = useState(false);

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image to upload.');
      return;
    }

    setUploading(true);
    const token= localStorage.getItem('token')
    const obj={
      file,name,size
    }
    console.log(obj);
    
    try {
      await axios.post('https://arba-be-myn8.onrender.com/category/', obj, {
        headers: {
          'Content-Type': 'multipart/form-data',

            Authorization: `Bearer ${token}`,
        }
      });
      alert('Category added successfully');
      setTitle('');
      setSize('');
      setFile(null);
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box m={'auto'} p={5}>
        
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Enter name' value={name} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Size</FormLabel>
        <Input type='text' placeholder='Enter Size' value={size} onChange={(e) => setSize(e.target.value)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Upload Image</FormLabel>
        <Input type='file' placeholder='Upload Image' accept='image/*' name='profile' disabled={uploading} onChange={handleFileChange} />
        <Button mt={4} colorScheme="teal" isLoading={uploading} loadingText="Uploading" type="submit" onClick={handleSubmit}>
          Add Product
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddCat;
