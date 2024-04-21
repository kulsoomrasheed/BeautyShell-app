import axios from "axios";
import { GET_CAT_SUCCESS, GET_TASK_SUCCESS, POST_TASK_SUCCESS, TASK_FAILURE, TASK_PENDING } from "./actionTypes";

export const getProducts=(dispatch)=>{
  
  const token= localStorage.getItem('token')
  console.log(token,'line5');
    dispatch({type: TASK_PENDING})
    axios.get("https://arba-be-myn8.onrender.com/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        dispatch({type:GET_TASK_SUCCESS,payload:res.data.products})
        console.log(res.data.products);

    }).catch((err)=>{
        dispatch({type:TASK_FAILURE})
        console.log(err.message);
    })
}

export const postProducts=(obj)=>(dispatch)=>{
  
  const token= localStorage.getItem('token')
    dispatch({type: TASK_PENDING})
console.log(token,'lin24');
    axios
    .post("https://arba-be-myn8.onrender.com/products", obj, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',

      },
    })
    .then((res) => {

      console.log(res.data);
      dispatch({type:POST_TASK_SUCCESS})

    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:TASK_FAILURE})

    });
}

export const deleteTask=(_id)=>(dispatch)=>{
  
  const token= localStorage.getItem('token')
  dispatch({type:TASK_PENDING})
  axios.delete(`https://arba-be-myn8.onrender.com/products/delete/${_id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    console.log(res.data);
    dispatch({type:POST_TASK_SUCCESS})
    dispatch(getProducts)

  }).catch((err)=>{
    console.log(err.message);
    dispatch({type:TASK_FAILURE})

  })
}

export const handlePatch = (id, obj)=>(dispatch) => {
  const token= localStorage.getItem('token')

  dispatch({type: TASK_PENDING})
  axios
    .patch(
      `https://arba-be-myn8.onrender.com/products/edit/${id}`,
      obj,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({type:POST_TASK_SUCCESS})
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:TASK_FAILURE})
    });
};

export const getCategory=(dispatch)=>{
  
  const token= localStorage.getItem('token')
  console.log(token,'categ');
    dispatch({type: TASK_PENDING})
    axios.get("https://arba-be-myn8.onrender.com/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        dispatch({type:GET_CAT_SUCCESS,payload:res.data.products})
        console.log(res.data.products);

    }).catch((err)=>{
        dispatch({type:TASK_FAILURE})
        console.log(err.message);
    })
}