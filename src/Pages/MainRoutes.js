import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Notfound from '../Components/Notfound'

const MainRoutes = () => {
  return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>


        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes