/*import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Button,
  FormLabel,Box,
  Input,
  Textarea,
  Select
} from '@chakra-ui/react';
import axios from 'axios';

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
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
      file,title,desc,price,category
    }
    console.log(obj);
    
    try {
      await axios.post('https://arba-be-myn8.onrender.com/products/', obj, {
        headers: {
          'Content-Type': 'multipart/form-data',

            Authorization: `Bearer ${token}`,
        }
      });
      alert('Product added successfully');
      setTitle('');
      setDescription('');
      setPrice('');
      setCategory('');
      setFile(null);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box m={'auto'} p={5}>
        
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder='Enter description' value={desc} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Price</FormLabel>
        <Input type='number' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        <Select placeholder='Select category' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value='makeup'>makeup</option>
          <option value='skincare'>skincare</option>
          <option value='haircare'>haircare</option>
        </Select>
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

export default AddProduct;


import React, { useState } from 'react';
import {
  FormControl,
  Button,
  FormLabel,
  Input
} from '@chakra-ui/react';
import axios from 'axios';

const AddProduct = () => {
  const token = localStorage.getItem("token")
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
const [title,setTitle]= useState("")
const [desc,setDesc]= useState("")
const [category,setCat]= useState("")
const [price,setPrice]= useState(0)

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
    const formData = new FormData();
    formData.append('image', file);
    const obj={}
    try {
      await axios.post('http://localhost:4500/products/', formData, {
        headers: {
          Authorization:`Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <FormControl>
        <FormLabel>Upload Image</FormLabel>
        <Input type='file' placeholder='Upload Image' accept='image/*' disabled={uploading} onChange={handleFileChange} />
        <Input type='text' onChange={(e)=>setTitle(e.target.value)}></Input>
        <Input type='text' onChange={(e)=>setCat(e.target.value)}></Input>
        <Input type='text' onChange={(e)=>setDesc(e.target.value)}></Input>
        <Input type='number' onChange={(e)=>setPrice(e.target.value)}></Input>

        <Button mt={4} colorScheme="teal" isLoading={uploading} loadingText="Uploading" type="submit" onClick={handleSubmit}>
          Upload
        </Button>
      </FormControl>
    </div>
  );
};

export default AddProduct;
*/

import React, { useState } from 'react';
import {
  FormControl,
  Button,
  FormLabel,
  Input,
  Textarea,
  Select
} from '@chakra-ui/react';
import axios from 'axios';

const AddProduct = () => {
  const token = localStorage.getItem("token")
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !title || !desc || !price || !category) {
      alert('Please fill all the fields and select an image to upload.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('category', category);
console.log(formData)
    try {
      await axios.post('http://localhost:4500/products/', formData, {
        headers: {

          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`

        }
      });
      alert('Product added successfully');
      setTitle('');
      setDescription('');
      setPrice('');
      setCategory('');
      setFile(null);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <FormControl>
        <FormLabel>Upload Image</FormLabel>
        <Input type='file' placeholder='Upload Image' accept='image/*' disabled={uploading} onChange={handleFileChange} />
        <FormLabel mt={4}>Title</FormLabel>
        <Input type='text' placeholder='Title' value={title} disabled={uploading} onChange={(e) => setTitle(e.target.value)} />
        <FormLabel mt={4}>Description</FormLabel>
        <Textarea placeholder='Description' value={desc} disabled={uploading} onChange={(e) => setDescription(e.target.value)} />
        <FormLabel mt={4}>Price</FormLabel>
        <Input type='number' placeholder='Price' value={price} disabled={uploading} onChange={(e) => setPrice(e.target.value)} />
        <FormLabel mt={4}>Category</FormLabel>
        <Select placeholder="Select category" value={category} disabled={uploading} onChange={(e) => setCategory(e.target.value)}>
          <option value="makeup">makeup</option>
          <option value="skincare">skincare</option>
          <option value="haircare">haircare</option>
        </Select>
        <Button mt={4} colorScheme="teal" isLoading={uploading} loadingText="Uploading" type="submit" onClick={handleSubmit}>
          Upload
        </Button>
      </FormControl>
    </div>
  );
};

export default AddProduct;