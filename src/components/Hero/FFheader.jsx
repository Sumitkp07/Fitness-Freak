import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import FFabout from '../About/FFabout';
import '../About/FFabout.css';
import FFservice from '../ServiceSec/FFservice';
import Productsection from '../Products/Productsection';
import FFtrainer from '../Trainers/FFtrainer';
import Login from '../login/Login';


// import Mainimage from "../public/image/main.jpg";
const FFheader = () => {
  useEffect(() => {
          Aos.init({
            offset: 200,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
          });
  }, [])
  return (  
    <>

      {/* ================= MAIN SECTION ================ */}

      <section className="main">
        <div className="main-container">
          <img src="../image/main.jpg" alt="" />
          <div className="main-headlines">
            <span data-aos="zoom-in" className="main-words">
              <span className="red">WORK HARDER</span>, GET STRONGER{" "}
            </span>
            <h2 data-aos="slide-up"  className="main-headline">
              EASY WITH OUR <span className="red">GYM</span>
            </h2>
            <div data-aos="zoom-in"  className="hero-btn">
            <button className="main-headline-login">BECOME A MEMBER</button>
            </div>
          </div>
        </div>
        <div className="black"></div>
      </section>
      <FFabout />
      <FFservice />
      <Productsection />
      <FFtrainer />
      <Login />
    </>
  );
};

export default FFheader;
