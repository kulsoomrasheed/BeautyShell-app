import React from 'react'
import { LOGIN_FAILED,SIGNUP_SUCCESS, LOGIN_PENDING, LOGIN_SUCCESS, TODO_PENDING, TODO_SUCCESS, TODO_FAILED } from './actionTypes'
const initState={
    loading:false,
    auth:false,
    err:false,
    token:'',
    todo:"",


}

export const reducer = (state=initState,{type,payload}) => {
  switch(type){
    case LOGIN_PENDING:return {...state, loading:true,err:false}
    case SIGNUP_SUCCESS:return {...state,loading:false,err:false}
    case LOGIN_SUCCESS:return {...state,auth:true,loading:false,err:false,token:payload}
    case LOGIN_FAILED:return {...state,loading:false,err:true}
    case TODO_PENDING:return {...state, loading:false,err:false}
    case TODO_SUCCESS:return {...state,loading:false,err:false,token:payload}
    case TODO_FAILED:return {...state,loading:false,err:true}


    default:return state
  }
}
