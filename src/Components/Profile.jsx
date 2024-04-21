import React, { memo, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Stack, Text, Image, Flex } from '@chakra-ui/react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const id = useParams().id;
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
  const fetchData = () => {
    const token = localStorage.getItem('token');

    axios
      .get(`https://arba-be-myn8.onrender.com/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.users);
        setData(res.data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setIsOpen(false);
  };

  useEffect(() => {
    const isAccepted = localStorage.getItem('termsAccepted');
    if (!isAccepted) {
      setIsOpen(true);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Stack
        w={'50%'}
        justifyContent={'center'}
        alignContent={'center'}
        p={5}
        gap={5}
        alignItems={'center'}
        m={'50px auto'}
      >
        <Image
          w={32}
          src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png"
        ></Image>
        <Text>{data?.username}</Text>
        <Text>{data?.email}</Text>
        <Button bgColor={'#2378b9'} color={'white'} size={'sm'} w={'50%'} onClick={()=>navigate(`/editprofile/${id}`)}>
          Update Profile
        </Button>
        <Flex gap={2}>
          <Button bgColor={'#2378b9'} color={'white'} onClick={() => setIsOpen(true)}>
            See T&C
          </Button>
          <Button bgColor={'#2378b9'} color={'white'}>
            Change Password
          </Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Terms and Conditions</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur
              amet eius possimus esse non quos voluptatem fugit autem nemo ducimus molestiae saepe
              nisi pariatur soluta, mollitia suscipit explicabo. Similique. Repellendus minus nam
              perspiciatis corrupti voluptatem dolore fuga! Enim vel architecto, perferendis
              incidunt ad pariatur possimus officia eum saepe sit nam reiciendis facilis
              voluptates nulla quas eos molestiae dolor omnis.
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={handleAccept}>
                Accept
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </div>
  );
};

export default memo(Profile);
