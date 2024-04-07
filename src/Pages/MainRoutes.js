import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Notfound from '../Components/Notfound'
import Private from './Private'
import Cart from '../Components/Cart'
import MyStore from '../Components/MyStore'
import Profile from '../Components/Profile'
const MainRoutes = () => {
  return <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Private><Home/></Private>}/>

        <Route path='/cart' element={<Private><Cart/></Private>}/> 
        <Route path='/store' element={<Private><MyStore/></Private>}/> 
        <Route path='/profile' element={<Private><Profile/></Private>}/> 

        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes