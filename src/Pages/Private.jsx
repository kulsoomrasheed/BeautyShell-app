import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Private = ({children}) => {
  const {auth}= useSelector((store)=>store.authReducer)
  const navigate = useNavigate()
  return auth? children:<Navigate to={"/login"}/>
}

export default Private