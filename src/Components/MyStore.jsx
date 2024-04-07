import React from 'react'
import Navbar from './Navbar'
import {Flex,Button} from '@chakra-ui/react'
const MyStore = () => {
  return (
    <div>
              <Navbar/>
<Flex width={'70%'}  m={'50px auto'} >
  <Button width={'50%'}>Categories</Button>
  <Button width={'50%'}>Products</Button>

</Flex>
    </div>
  )
}

export default MyStore