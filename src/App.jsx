import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css'
import  Home  from "./pages/Home";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<MainPage/>}/> 
      </Routes>  
    </Router>
  );
}

export default App
