"use client";
import axios from "axios";
import {
  Box,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  HStack,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Products from "./ProductsList";

const AllProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://nykaa-server-wg8d.onrender.com/nykaa/products")
      .then((res) => {
        console.log(res.data.msg);
        setData(res.data.msg);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Box bgColor={"rgb(243, 243, 243)"}>
      <Heading
        fontSize={"4xl"}
        textAlign={"center"}
        bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text"
        margin={5}
        mt={5}
      >
        All Products (565)
      </Heading>
      <Box bgColor={"white"} display={"flex"} w={"80%"} marginX={"auto"}>
        <Products data={data} />
      </Box>
    </Box>
  );
};

export default AllProducts;
