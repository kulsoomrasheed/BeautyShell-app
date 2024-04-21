import React, { memo, useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
  Button,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SwiperCarousal from '../Components/Carousel';
import AllProducts from '../Components/Products';
import Nav from '../Components/Nav';
import Navbar from '../Components/Navbar';
import { ChevronRightIcon } from '@chakra-ui/icons';


const AllProductsPage = () => {





  return (
    <Box width={'90%'} justifyContent={'center'} margin={'auto'} my={5}>
      <Navbar/>


    
      <Heading
        fontSize={"4xl"}
        textAlign={"center"}
        bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text"
        margin={5}
        mt={5}
      >
        All Products (8)
      </Heading>
<AllProducts/>


    </Box>
    
  );
};

export default memo(AllProductsPage);
/*const fetch= () => {
  axios.get("https://lib-a9dj.onrender.com/user")
    .then((res) => {
      console.log("Data from server:", res.data.users);
      setuserData(res.data.users);
    })
    .catch((err) => {
      console.error("Error fetching data:", err.message);
   
   
    });
}


 {data && data.map((el, i) => (
            <Tr key={i}>
            
              <Td>{el.title}</Td>
              <Td>{el.username}</Td>
              <Td>{new Date(el.createdAt).toLocaleString()}</Td>
              <Button >Delete</Button>
            </Tr>
          ))}*/
