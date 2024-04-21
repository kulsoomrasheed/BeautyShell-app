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
  useDisclosure,AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from "@chakra-ui/react";
import AddCat from "./AddCat";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCategory, getProducts } from "../redux/taskReducer/action";
const PostCat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const dispatch =useDispatch()
const category= useSelector((store)=>store.productReducer.category)
console.log(category);
useEffect(()=>{
  dispatch(getCategory)
},[])
  const token=localStorage.getItem('token');
  const deleteItem = (_id) => {
    axios
      .delete(`https://arba-be-myn8.onrender.com/category/delete/${_id}`, {
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
     
    >
     <Button  bgColor={'#2378b9'} color={'white'} mb={4} marginX={5} onClick={()=>dispatch(getCategory)}>
        Refresh
      </Button>
      <Button bgColor={'#2378b9'} color={'white'}  mb={4} marginX={5}>
        Filter
      </Button>
  

 
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
Add a Category            </AlertDialogHeader>

            <AlertDialogBody>
<AddCat/>
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
      <Th border={"2px solid black"}>Name</Th>
      <Th border={"2px solid black"}>Size</Th>
      <Th border={"2px solid black"}>Actions</Th>
    </Tr>
  </Thead>

  {category && category.map((el, i) => {
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
          <Td border={"2px solid black"}>{el.name}</Td>
          <Td border={"2px solid black"}>{el.size}</Td>
          <Td border={"2px solid black"}>
            <Button m={3}> Edit</Button>
            <Button onClick={() => deleteItem(el._id)}>Delete</Button>
          </Td>
        </Tr>
      </Tbody>
    );
  })}
</Table>

      <Box m={10} w={'100%'}>

      </Box>

    </Box>
  );
};

export default PostCat;
