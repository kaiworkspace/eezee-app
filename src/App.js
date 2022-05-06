import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";

import Home from './Components/Home'
import Product from './Components/Product/Product'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </>
  );
}

