import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import User from './pages/User'
import Order from './pages/Order'
import Product from './pages/Product'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/users' element={<User/>}/>
      <Route path='/orders' element={<Order/>}/>
      <Route path='/products' element={<Product/>}/>



    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
