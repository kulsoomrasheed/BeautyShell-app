import axios from "axios";
import { GET_TASK_SUCCESS, POST_TASK_SUCCESS, TASK_FAILURE, TASK_PENDING } from "./actionTypes";

export const getTasks=(dispatch)=>{
  
  const token= localStorage.getItem('token')
  console.log(token,'line5');
    dispatch({type: TASK_PENDING})
    axios.get("https://task-management-backend-3gib.onrender.com/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        dispatch({type:GET_TASK_SUCCESS,payload:res.data.tasks})
        console.log(res.data.tasks);

    }).catch((err)=>{
        dispatch({type:TASK_FAILURE})
        console.log(err.message);
    })
}

export const postTasks=(obj)=>(dispatch)=>{
  
  const token= localStorage.getItem('token')
    dispatch({type: TASK_PENDING})
console.log(token,'lin24');
    axios
    .post("https://task-management-backend-3gib.onrender.com/tasks", obj, {
      headers: {
        Authorization: `Bearer ${token}`,
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
  axios.delete(`https://task-management-backend-3gib.onrender.com/tasks/delete/${_id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    console.log(res.data);
    dispatch({type:POST_TASK_SUCCESS})
    dispatch(getTasks)

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
      `https://task-management-backend-3gib.onrender.com/tasks/edit/${id}`,
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
