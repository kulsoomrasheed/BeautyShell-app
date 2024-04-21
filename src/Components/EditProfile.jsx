import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { handlePatch } from '../redux/taskReducer/action'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'


const EditProfile = () => {
  const dispatch =useDispatch()
  const {id}=useParams()
  
  const [username,setname]= useState("")
  const [email,setemail]= useState("")
  const [pass,setpass]= useState("")


  const handleClick=()=>{
    const obj={username,email,pass}
    console.log(obj);
    dispatch(handlePatch(id,obj))
  }
  return (
    <Stack w={'85%'} margin={'auto'}>
      <Navbar/>

<Box width={'50%'} m={"auto"}>
  <Heading py={10}> Edit your Profile</Heading>
  <label>Enter Username</label>
  <Input onChange={(e)=>setname(e.target.value)} type='text' ></Input>
  <label>Enter Email</label>

  <Input onChange={(e)=>setemail(e.target.value)} type='email' ></Input>
  <label>Enter Password</label>

  <Input  onChange={(e)=>setpass(e.target.value)} type='password' ></Input>
<Button onClick={handleClick}> Update</Button>
</Box>
    </Stack>

  )
}

export default EditProfile