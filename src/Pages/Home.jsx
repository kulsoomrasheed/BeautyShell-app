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


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
const navigate=useNavigate()
useEffect(() => {
  const isAccepted = localStorage.getItem('termsAccepted');
  if (!isAccepted) {
    setIsOpen(true); 
  }
}, []);

const handleClose = () => {
  setIsOpen(false);
};

const handleAccept = () => {
  setAccepted(true);
  localStorage.setItem('termsAccepted', 'true');
  setIsOpen(false);
};

const handleCancel = () => {
  const isAccepted = localStorage.getItem('termsAccepted');
  alert("Accept the terms and conditions first")
  if (!isAccepted) {
    setIsOpen(true); 
  }};


  return (
    <Box width={'90%'} justifyContent={'center'} margin={'auto'} my={5}>
      <Navbar/>
    <SwiperCarousal/>


      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms and Conditions</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur amet eius possimus esse non quos voluptatem fugit autem nemo ducimus molestiae saepe nisi pariatur soluta, mollitia suscipit explicabo. Similique. Repellendus minus nam perspiciatis corrupti voluptatem dolore fuga! Enim vel architecto, perferendis incidunt ad pariatur possimus officia eum saepe sit nam reiciendis facilis voluptates nulla quas eos molestiae dolor omnis.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='ghost' onClick={handleAccept}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
<Flex justifyContent="flex-end" m={'50px auto'}>
  <Button bgColor={'#5cc9cf'} color={'white'} onClick={() => navigate("/allproducts")}>
    All Products <ChevronRightIcon/>
  </Button>
</Flex>

    </Box>
    
  );
};

export default memo(Home);
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
