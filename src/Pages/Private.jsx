import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from './Login'

const Private = ({children}) => {
  const auth= useSelector((store)=>store.auth)
  const navigate = useNavigate()
  return auth? children:<Navigate to={"/login"}/>
}

export default Private