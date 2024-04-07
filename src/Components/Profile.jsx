import React from 'react'
import Navbar from './Navbar'
import {Stack,Text,Image,Flex,Button} from "@chakra-ui/react";
const Profile = () => {
  return (
    <div>
        <Navbar/>
        <Stack w={"50%"}justifyContent={'center'} alignContent={'center'} p={5} gap={5} alignItems={'center'} m={'50px auto'}>
            <Image w={32}  src="https://publicdomainvectors.org/tn_img/female-user-icon.webp"></Image>
            <Text>username</Text>
            <Text>email</Text>
            <Button size={'sm'} w={'50%'}>Update Profile</Button>
          <Flex gap={2}>  <Button>Update Profile</Button>
            <Button>Update Profile</Button></Flex>

        </Stack>
    </div>
  )
}

export default Profile