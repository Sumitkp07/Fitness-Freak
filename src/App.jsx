import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Register from './Register';
import FFheader from './components/FFheader';
import './components/FFheader.css';
import './components/FFabout.css';
import './components/FFservice.css';
import './components/FFtrainer.css';
import './components/FFfooter.css';
import './components/Navbar.css';
import '../src/index.css';
import FFabout from './components/FFabout';
import FFservice from './components/FFservice';
import FFtrainer from './components/FFtrainer';
import FFfooter from './components/FFfooter';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <>
    <Navbar/>
    <FFheader/>
    <FFabout/>  
    <FFservice/>
    <FFtrainer/>
    <FFfooter/>
    </>

  );
}

export default App;
