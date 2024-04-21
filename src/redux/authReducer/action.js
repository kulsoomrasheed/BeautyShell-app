import React from 'react'
import axios from "axios";
import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS, TODO_FAILED, TODO_PENDING, TODO_SUCCESS } from './actionTypes';
import { useSelector } from 'react-redux';


export const signup = (obj)=>(dispatch) => {
    dispatch({type:LOGIN_PENDING})
axios.post("https://arba-be-myn8.onrender.com/users/register",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS})
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})

})
}



export const login = (obj)=>async(dispatch) => {
    dispatch({type:LOGIN_PENDING})
 return axios.post("https://arba-be-myn8.onrender.com/users/login",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    localStorage.setItem("token", res.data.token)
    console.log(res.data.token);
    return res.data.token
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})
    throw err

})
}