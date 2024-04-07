"use client";
import axios from "axios";
import {
  Box,
 
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
      
      <Box bgColor={"white"} display={"flex"} w={"80%"} marginX={"auto"}>
        <Products data={data} />
      </Box>
    </Box>
  );
};

export default AllProducts;
