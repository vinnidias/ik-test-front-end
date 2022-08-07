import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TasksProvider } from "../contexts/TasksContext";
import { CreateTask } from "../pages/CreateTask";
import { Home } from "../pages/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <TasksProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createTask" element={<CreateTask />} />
        </Routes>
      </TasksProvider>
    </BrowserRouter>
  );
};
