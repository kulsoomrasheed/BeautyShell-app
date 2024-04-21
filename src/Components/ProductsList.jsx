import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cartalert from "./Cartalert";
import { memo } from "react";
import { getProducts } from "../redux/taskReducer/action";
import { useDispatch } from "react-redux";
const Products = ({ data }, wish) => {
  const dispatch=useDispatch()
  console.log(wish);
  const token=localStorage.getItem('token');
  const deleteItem = (_id) => {
    axios
      .delete(`https://arba-be-myn8.onrender.com/products/delete/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
  })
      .then((res) => {
        console.log(res.data);
dispatch(getProducts)      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleWishlist = (el) => {
    axios
      .post("https://arba-be-myn8.onrender.com/cart", el, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navigate = useNavigate();
  return (
    <Grid
      width={"85%"}
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
      {data.length>0 && data.slice(0, 8).map((el, i) => {
      localStorage.setItem("user",el.userID)
        return (
          <Box key={i}
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
                  margin={1}
                  variant={"outline"}
                  padding={2}
                  color={"#5cc9cf"}
                  fontSize={"md"}
                  onClick={() => handleWishlist(el)}
                >
                  💖
                </Button>

                <Cartalert title={"Add to Cart "} el={el} />

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
    </Grid>
  );
};

export default memo(Products);
/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {el.shades}
              </Box>*/