'use client'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Checkbox,
  Image,
} from '@chakra-ui/react'
import Nav from '../Components/Nav';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/authReducer/action';
import { useState } from 'react';
import Navbar from './Navbar';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
]

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  )
}

export default function Login() {
  const [username, setname] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  

  const handleclick =async () => {
    const obj = {
      username,
      pass,
    };
    console.log(obj);
   const response= dispatch(login(obj)).then((res)=>{
        setname("")
        setpass("")
        navigate("/products")
        alert("Login Successfull!")
         

   }).catch((err)=>{
    alert("User not found")
   })

  }  
    

  return (
    <Box display={'flex'}  h={'40rem'} alignContent={'center'}  alignItems={'center'} >

 
    <Stack w={'50%'}  >
<Image src='bg.png' width={'80%'}></Image>
    </Stack>
   
      <Stack w={'50%'} 
        bg={'gray.50'}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}>
        <Stack spacing={4} w={'80%'}  alignContent={'center'} alignItems={'center'} m={'auto'}>
          <Stack width={'5rem'} h={'5rem '} bgColor={'#00aac3'} borderRadius={'100%'}></Stack>
          <Heading
            color={'gray.800'}
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
ROSEWOOD FLORISTRY            </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
        Your favourite makeup store






</Text>
        </Stack>
          <Box as={'form'} mt={10}>
          <Stack spacing={4}>
            <Input
                          onChange={(e)=>setname(e.target.value)}

              placeholder="Username"
              type="text"
              bg={'gray.100'}
              border={"1px solid #00aac3"}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <Input
            onChange={(e)=>setpass(e.target.value)}
              placeholder="Enter Password"
              bg={'gray.100'}

              border={"1px solid #00aac3"}
              type='password'
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
      
          </Stack>
          <Button
            fontFamily={'heading'}
            mt={8}
            w={'full'}
bgColor={'#00aac3'}            color={'white'}
            _hover={{
              bgColor: '#037181',
              boxShadow: 'xl',
            
            }}  onClick={handleclick}>
            Login
          </Button>
          <Text>Don't have an account?<Link to={"/"}>  <span style={{ color:'#00aac3'}}>Sign up</span>  </Link></Text>

        </Box>
        form
      </Stack>
  
  </Box>
  )
}

/*<Box display={'flex'}  h={'40rem'} alignContent={'center'}  alignItems={'center'} >

 
      <Stack w={'50%'}  >
<Image src='bg.png' width={'80%'}></Image>
      </Stack>
     
        <Stack w={'50%'} 
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4} w={'80%'}  alignContent={'center'} alignItems={'center'} m={'auto'}>
            <Stack width={'5rem'} h={'5rem '} bgColor={'#00aac3'} borderRadius={'100%'}></Stack>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
ROSEWOOD FLORISTRY            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          Your favourite makeup store






</Text>
          </Stack>
            <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                            onChange={(e)=>setname(e.target.value)}

                placeholder="Username"
                type="text"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
              onChange={(e)=>setpass(e.target.value)}
                placeholder="Enter Password"
                bg={'gray.100'}
                border={0}
                type='password'
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
        
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              
              }}  onClick={handleclick}>
              Login
            </Button>
          </Box>
          form
        </Stack>
    
    </Box>*/