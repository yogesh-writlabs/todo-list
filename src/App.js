import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todolist from "./todolist";
import Todo from "./todo";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Todo />} />
      <Route path="/todolist" element={<Todolist />} />
    </Routes>
  );
}

export default App;
