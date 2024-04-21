import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tfoot,
  Tr,
  Button,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,useDisclosure
} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import { getProducts } from "../redux/taskReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Products from "./ProductsList";
import AllProducts from "./Products";
import axios from "axios";
const PostProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const {products}=useSelector((store)=>store.productReducer)
  console.log(products,"pro");

  const token=localStorage.getItem('token');
  const deleteItem = (_id) => {
    axios
      .delete(`https://arba-be-myn8.onrender.com/products/delete/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
  })
      .then((res) => {
        console.log(res.data);
dispatch(getProducts)      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Box
      width={"80%"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      margin={"auto"}
      my={5}
    >
     <Button onClick={()=>dispatch(getProducts)} bgColor={'#2378b9'} color={'white'} mb={4} marginX={5}>
        Refresh
      </Button>
      <Button bgColor={'#2378b9'} color={'white'}  mb={4} marginX={5}>
        Filter
      </Button>{" "}
  

 
      <Button bgColor={'#2378b9'} color={'white'} mb={4} marginX={5} onClick={onOpen}>
      Add
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
Add a Product            </AlertDialogHeader>

            <AlertDialogBody>
<AddProduct/>
            </AlertDialogBody>

           
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Table
  justifyContent={"center"}
  textAlign={"center"}
  alignContent={"center"}
  margin={"auto"}
  alignItems={"center"}
  variant="ghost"
  colorScheme="pink"
  border="2px solid black" // Add 2px border attribute here
>
  <Thead bgColor={'#2378b9'} color={'white'} border={"2px solid black"}>
    <Tr>
      <Th border={"2px solid black"}>Image</Th>
      <Th border={"2px solid black"}>Title</Th>
      <Th border={"2px solid black"}>Price</Th>
      <Th border={"2px solid black"}>Actions</Th>
    </Tr>
  </Thead>

  {products && products.map((el, i) => {
    return (
      <Tbody
        key={i}
        justifyContent={"center"}
        textAlign={"center"}
        alignContent={"center"}
        margin={"auto"}
        alignItems={"center"}
      >
        <Tr border={"2px solid black"}>
          <Td border={"2px solid black"}>{el.image}</Td>
          <Td border={"2px solid black"}>{el.title}</Td>
          <Td border={"2px solid black"}>{el.price}</Td>
          <Td border={"2px solid black"}>
            <Button m={3} onClick={()=>navigate(`/edit/${el._id}`)}> Edit</Button>
            <Button onClick={() => deleteItem(el._id)}>Delete</Button>
          </Td>
        </Tr>
      </Tbody>
    );
  })}
</Table>

      <Box m={10} w={'100%'}>
              <AllProducts />

      </Box>

    </Box>
  );
};

export default PostProducts;
