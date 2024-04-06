import React from 'react'
import { GET_TASK_SUCCESS, POST_TASK_SUCCESS, TASK_FAILURE, TASK_PENDING } from './actionTypes'

const initState={
    loading:false,
    err:false,
   tasks:[]
   
  }

export const reducer = (state=initState,{type,payload}) => {
  switch(type){
    case TASK_PENDING:return {...state, loading:true,err:false}
    case POST_TASK_SUCCESS:return {...state,loading:false,err:false}
    case GET_TASK_SUCCESS:return {...state,loading:false,err:false,tasks:payload}
    case TASK_FAILURE:return {...state,loading:false,err:true}


    default:return state
  }
}
