import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTask } from "../pages/CreateTask";

import { Home } from "../pages/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createTask" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
};
