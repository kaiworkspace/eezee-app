import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";

import Home from './Components/Home'
import Product from './Components/Product/Product'

import CartContext from './CartContext'

import "./App.css"
export default function App() {
  
  const [cartItemCount, setCartItemCount] = useState(0)

  return (
    <div>
      <CartContext.Provider value={{cartItemCount, setCartItemCount}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

