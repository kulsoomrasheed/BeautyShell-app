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
import AddProduct from '../Components/AddProduct'
import Edit from '../Components/Edit'
import AllProductPage from '../Components/AllProductPage'
import EditProfile from '../Components/EditProfile'
const MainRoutes = () => {
  return <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/store' element={<MyStore/>}/> 
        <Route path='/allproducts' element={<AllProductPage/>}/> 
        <Route path='/editprofile/:id' element={<EditProfile/>}/> 

        <Route path='/profile/:id' element={<Profile/>}/> 
        <Route path='/edit/:id' element={<Edit/>}/> 

        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes