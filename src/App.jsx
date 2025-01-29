// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Routes, Route } from "react-router-dom";
import AddBook from "./AddBook.jsx";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
