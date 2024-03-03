import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  return (
    <>
      <header>
        {/* ================ LOGO SECTION ================== */}
        <nav>
          <div className="navbar">
            <div className="logo">
              <div className="left1">
                Fitness<span id="blue">Freak</span>
              </div>
            </div>

            {/* ================ NAVBAR SECTION =============== */}

            <ul className="list-parent">
              <li className="item item-1">
                <a href="/">Home</a>
              </li>
              <li className="item item-1">
                <a href="/">Contact</a>
              </li>
              <li className="item item-1">
                <a href="/">About</a>
              </li>
              <li className="item item-1">
                <a href="/">Services</a>
              </li>
              <li className="item-1" id="login">
                <a href="/">login</a>
              </li>
              <span id="bar">
                <i
                  class="fa-solid fa-bars fa-xl"
                  style={{ color: "#ffffff" }}
                  onClick={()=>{setMenu(!isSideMenuOpen)}} 
                ></i>
              </span>
              <span id="cart">
                <i class="fa-solid fa-cart-shopping fa-xl"></i>
                <span id="number">3</span>
              </span>
            </ul>
          </div>
        </nav>

        {/* sidebar mobile version */}
        <div className ={isSideMenuOpen ? "hidden-slide": "sidebar-main"}>
          <section className="sidebar">
            <IoClose 
            onClick={()=>{setMenu(true)}} 
            id="closebar"/>
            <ul>
            <li className=" sidebar-list">
                <a href="/">Home</a>
              </li>
              <li className=" sidebar-list">
                <a href="/">Contact</a>
              </li>
              <li className=" sidebar-list">
                <a href="/">About</a>
              </li>
              <li className=" sidebar-list">
                <a href="/">Services</a>
              </li>
              <li className="sidebar-list">
                <a href="/">login</a>
              </li>
            </ul>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
