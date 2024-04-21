import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const EditProfile = () => {
  return (
<Box width={'40%'} m={"auto"}>
  <label>Enter Username</label>
  <Input type='text' ></Input>
  <label>Enter Email</label>

  <Input type='email' ></Input>
  <label>Enter Password</label>

  <Input type='password' ></Input>
<Button>Update</Button>
</Box>
  )
}

export default EditProfile