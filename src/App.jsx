import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css';
import Navbar from './components/Navbar/Navbar';
import FFheader from './components/Hero/FFheader';
import FFabout from './components/About/FFabout';
import FFtrainer from './components/Trainers/FFtrainer';
import Productsection from './components/Products/Productsection';
import FFservice from './components/ServiceSec/FFservice';
import FFfooter from './components/Footer/FFfooter';
import Login from "./components/login/Login";
import './components/Hero/FFheader.css';
import './components/About/FFabout.css';
import './components/ServiceSec/FFservice.css';
import './components/Trainers/FFtrainer.css';
import './components/Footer/FFfooter.css';
import './components/Navbar/Navbar.css';
import './components/login/Login.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<FFheader/>} />
        <Route path="/about" element={<FFabout />} />
        <Route path="/service" element={<FFservice />} />       
        <Route path="/products" element={<Productsection />} />       
        <Route path="/trainer" element={<FFtrainer />} />
        <Route path="/login-section" element={<Login />} />
      </Routes>
      <FFfooter />
    </BrowserRouter>
    </>
  );
}

export default App;

