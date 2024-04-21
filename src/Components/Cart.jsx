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
const token=localStorage.getItem('token')

  useEffect(()=>{
   fetchData()
  },[])
   const fetchData=()=>{
    setload(true)
     axios.get("https://arba-be-myn8.onrender.com/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res)=>{
       console.log(res.data.products);
       setData(res.data.products);
       setload(false)
     }).catch((err)=>{
       console.log(err.message);
       setload(false)

     })
    }

    const deleteItem = (_id) => {
        axios
          .delete(`https://arba-be-myn8.onrender.com/cart/delete/${_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
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
      width={"80%"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={2}
      margin={"auto"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >

      {data && data.map((el, i) => {
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
            <Image width={"100%"} justifyContent={"center"} src={el.image} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {el.title}
              </Box>

              <Box>
                ₹{el.price}
                <Box m={2} as="span" color="green.300" fontSize="sm">
                  {el.desc}
                </Box>
              </Box>

              <Box
                display="flex"
                mt="2"
                alignItems="center"
                justifyContent={"center"}
              >
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {el.category}
                </Box>
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
                    color={"#5cc9cf"}
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