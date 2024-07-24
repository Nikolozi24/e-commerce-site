import React, {useEffect, useState} from "react";
import Main from "./Components/Pages/Main";
import {Routes, Route } from "react-router-dom";
import Product from "./Components/Pages/ProductPage/Product";
import Login from "./Components/Pages/Login/Login";
import Cart from "./Components/Pages/Cart/Cart";
function App() {
 return (
      <>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:id" element={<Product/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      </Routes>
    </>)
 ;
}

export default App;
