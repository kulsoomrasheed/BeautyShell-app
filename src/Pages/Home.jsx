import React, { useEffect, useState } from 'react';
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


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

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
  setIsOpen(true); 
};


  return (
    <Box width={'80%'} justifyContent={'center'} margin={'auto'} my={5}>
      <Heading color={'purple.600'} mb={10}>
      BeautyShell App
      </Heading>
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

<AllProducts/>
    </Box>
  );
};

export default Home;
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
