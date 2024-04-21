import React, { useEffect, useState } from "react";
import {
  FormControl,
  Button,
  FormLabel,
  Box,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { handlePatch } from "../redux/taskReducer/action";
import { useDispatch } from "react-redux";

const Edit = () => {
    const {id} = useParams()
    const token=localStorage.getItem('token')
console.log(id);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit =  (e) => {

    e.preventDefault();
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", Number(price));
    formData.append("category", category);

    
    console.log(formData,typeof price);
    axios
    .patch(
      `https://arba-be-myn8.onrender.com/products/edit/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });  };

  return (
    <Box m={"auto"} p={5} width={"50%"}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="makeup">makeup</option>
          <option value="skincare">skincare</option>
          <option value="haircare">haircare</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Upload Image</FormLabel>
        <Input
          type="file"
          placeholder="Upload Image"
          accept="image/*"
          name="profile"
          disabled={uploading}
          onChange={handleFileChange}
        />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={uploading}
          loadingText="Uploading"
          type="submit"
          onClick={handleSubmit}
        >
          Done
        </Button>
      </FormControl>
    </Box>
  );
};

export default Edit;
