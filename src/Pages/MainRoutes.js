import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Notfound from '../Components/Notfound'
import Private from './Private'
const MainRoutes = () => {
  return <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Private><Home/></Private>}/>


        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes