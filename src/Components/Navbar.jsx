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
  const id = localStorage.getItem("user")
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
      justifyContent={'space-between'}
      alignItems={'center'}
      position={isSticky ? 'fixed' : 'relative'}
      top="0"
      zIndex="100"
      backgroundColor="white"
      boxShadow={isSticky ? '0px 4px 4px rgba(0, 0, 0, 0.1)' : 'none'}
      display={{
        base: 'none', 
        sm: 'none', 
        lg: 'flex',   
      }}
    >
      <Flex justifyContent="space-between" alignItems="center"     w={'100%'}  gap={26}
>
        <Link to="/products">
        <Button color={'white'} bgColor={"#21becd"} _hover={{bgColor:"#21becd"}}>Logo</Button>
        </Link>
       
      
       <Flex>
       <Link to={"/cart"}  ><Image w={'4rem'}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5R6b9L3PEWRpa4LHs00d0HY4jrw-A4a1ooT0WNKxiw&s'></Image> </Link>
     
     <Menu >
<MenuButton mx={5}  as={Button} display={auth?"block":"none"} >
 <Image width={8} src='https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png'/>
</MenuButton>
<MenuList>
 <Link to={'/store'}><MenuItem >My Store</MenuItem></Link>
 <Link to={`/profile/${id}`}>   <MenuItem>Profile</MenuItem></Link>
 <MenuItem onClick={()=>{
     navigate("/login")
     localStorage.clear()
   } }>Logout</MenuItem>

</MenuList>
</Menu>
       </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;


