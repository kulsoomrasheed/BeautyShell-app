import React, { useEffect, useState } from 'react'
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Heading, Spinner  ,Badge,
    Button,
    Flex,
    Grid,
    Image,} from '@chakra-ui/react'

import axios from 'axios'
import Navbar from './Navbar'

const Cart = () => {
  const[ data, setData]= useState([])
  const[ load, setload]= useState(false   )
const wish = true

  useEffect(()=>{
   fetchData()
  },[])

   const fetchData=()=>{
    setload(true)
     axios.get("https://nykaa-server-wg8d.onrender.com/nykaa/cart").then((res)=>{
       console.log(res.data.msg);
       setData(res.data.msg);
       setload(false)
     }).catch((err)=>{
       console.log(err.message);
       setload(false)

     })
    }

    const deleteItem = (_id) => {
        axios
          .delete(`https://nykaa-server-wg8d.onrender.com/nykaa/cart/${_id}`)
          .then((res) => {
            console.log(res.data);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
  return (
    <div>
        <Box  width={"100%"} margin={"auto"}>
 

      <Navbar/>


    
        <Heading size={"2xl"} m={5} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">My Cart ({data?.length})</Heading>
        <Button  bgGradient="linear(to-r, red.400, purple.600)" color={'white'}>Checkout</Button>
<Grid
      width={"85%"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={2}
      margin={"auto"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >

      {data.map((el, i) => {
        return (
          <Box
            justifyContent={"center"}
            maxW="sm"
            borderWidth="1px"
            gap={5}
            margin={1}
            borderRadius={10}
            overflow="hidden"
          >
            {" "}
            <Box display="flex" alignItems="baseline"></Box>
            <Badge borderRadius="full" px="2" colorScheme="pink"></Badge>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {el.best}
            </Badge>
            <Image width={"100%"} justifyContent={"center"} src={el.img} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {el.name}
              </Box>

              <Box>
                ₹{el.price}
                <Box m={2} as="span" color="green.300" fontSize="sm">
                  {el.offer}
                </Box>
              </Box>

              <Box
                display="flex"
                mt="2"
                alignItems="center"
                justifyContent={"center"}
              >
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {el.qty}
                </Box>
              </Box>
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {el.shades}
              </Box>

              <Flex
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                gap={2}
              >
            


                <Button
                  style={{ display: wish ? "block" : "none" }}
                  variant={"outline"}
                >
                  <DeleteIcon
                    fontSize={"3xl"}
                    onClick={() => deleteItem(el._id)}
                    color={"#e80071"}
                  />
                </Button>
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Grid></Box>
    </div>
  )
}

export default Cart