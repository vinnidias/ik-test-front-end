import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";


export const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}