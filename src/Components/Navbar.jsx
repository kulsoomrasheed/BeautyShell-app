import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {useSelector} from 'react-redux'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
const Navbar = () => {
  const navigate = useNavigate();
  const {auth}= useSelector((store)=>store.authReducer)
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      w={'100%'}
      padding={1}
      justifyContent={'center'}
      alignItems={'center'}
      alignContent={'space-evenly'}
      position={isSticky ? 'fixed' : 'relative'}
      top="0"
      zIndex="100"
      backgroundColor="white"
      boxShadow={isSticky ? '0px 4px 4px rgba(0, 0, 0, 0.1)' : 'none'}
      display={{
        base: 'none', // Hide on small screens
        sm: 'none',   // Hide on medium screens
        lg: 'flex',   // Display on large screens
      }}
    >
      <Flex justifyContent="space-evenly" alignItems="center"       gap={16}
>
        <Link to="/products">
          <Image
            width="200px"
            src="logo.png"
            alt="logo"
          />
        </Link>
        <Flex justifyContent="space-evenly" gap={3}>
          <Link to={'/categories'}>
            <Text color={'gray.600'}>
              <b>Categories</b>
            </Text>
          </Link>
          <Link to={'/brands'}>
            <Text color={'gray.600'}>
              <b>Brands</b>
            </Text>
          </Link>
          <Text color={'gray.600'}>
            <b>Luxe</b>
          </Text>
          <Text color={'gray.600'}>
            <b>RF Fashion</b>
          </Text>
          <Text color={'gray.600'}>
            <b>Beauty Advice</b>
          </Text>
        </Flex>
      
        <div>
          
        </div>
        <Button onClick={()=>navigate("/cart")} bgColor={'#e80071'} colorScheme='pink' color={'white'} fontSize={'sm'} > Cart</Button>
      {auth? <Button onClick={()=>navigate("/signup")} bgColor={'#e80071'} colorScheme='pink' color={'white'} fontSize={'sm'}> Logout</Button>: <Button onClick={()=>navigate("/signup")} bgColor={'#e80071'} colorScheme='pink' color={'white'} fontSize={'sm'}> Login</Button>} 
        <Menu>
  <MenuButton as={Button} >
    <Image width={8} src='https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png'/>
  </MenuButton>
  <MenuList>
    <Link to={'/store'}><MenuItem >My Store</MenuItem></Link>
    <Link to={'/profile'}>   <MenuItem>Profile</MenuItem></Link>
    <MenuItem>Logout</MenuItem>

  </MenuList>
</Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;


