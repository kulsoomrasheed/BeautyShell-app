"use client";
import axios from "axios";
import {
  Box,
 
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import Products from "./ProductsList";
import { getProducts } from "../redux/taskReducer/action";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.productReducer.products)
  console.log(data,"data");
  useEffect(() => {
   dispatch(getProducts)
  }, []);

 
  return (
      
      <Box bgColor={"white"} display={"flex"} w={"100%"} marginX={"auto"}>
        <Products data={data} />
      </Box>
  );
};

export default memo(AllProducts);
