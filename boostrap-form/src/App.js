import React, {useEffect, useState} from "react";
import Main from "./Components/Pages/Main";
import {Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
function App() {
 return (
      <>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </>)
 ;
}

export default App;
