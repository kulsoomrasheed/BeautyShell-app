import React, { memo, useState } from 'react'
import Navbar from './Navbar'
import {Flex,Button,Stack, Box} from '@chakra-ui/react'
import PostProducts from './PostProducts'
import PostCat from './PostCat'

const MyStore = () => {
  const [isProducts, setIsProducts] = useState(false)
  const [isCategories, setIsCategories] = useState(true)

  const handleProductsClick = () => {
    setIsProducts(true)
    setIsCategories(false)
  }

  const handleCategoriesClick = () => {
    setIsProducts(false)
    setIsCategories(true)
  }

  return (
    <Box >
      <Navbar/>
      <Flex width={'70%'}  m={'50px auto'} >
        <Button 
          variant={isCategories ? 'solid' : 'outline'} 
          bgColor={isCategories ? '#5cc9cf' : 'gray'} 
          width={'50%'}
          onClick={handleCategoriesClick}
        >
          Categories
        </Button>
        <Button 
          variant={isProducts ? 'solid' : 'outline'} 
          bgColor={isProducts ? '#5cc9cf' : 'gray'} 
          onClick={handleProductsClick} 
          width={'50%'}
        >
          Products
        </Button>
      </Flex>
      <Stack>
        {isProducts ? <PostProducts/> : <PostCat/>}
      </Stack>
    </Box >
  )
}

export default memo(MyStore)
