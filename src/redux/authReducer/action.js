import React from 'react'
import axios from "axios";
import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS, TODO_FAILED, TODO_PENDING, TODO_SUCCESS } from './actionTypes';
import { useSelector } from 'react-redux';
import { store } from '../store';


export const signup = (obj)=>(dispatch) => {
    dispatch({type:LOGIN_PENDING})
axios.post("http://localhost:4500/user/register",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS})
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})

})
}



export const login = (obj)=>(dispatch) => {
    dispatch({type:LOGIN_PENDING})
 axios.post("http://localhost:4500/user/login",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    localStorage.setItem("token", res.data.token)
    console.log(res.data.token);
    alert("Login successfully!")
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})
    alert("User not found!")

})
}