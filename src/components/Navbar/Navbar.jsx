import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="item item-1">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="item item-1">
                <NavLink to="/service">Services</NavLink>
              </li>
              <li className="item item-1">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="item item-1">
                <NavLink to="/trainer">trainer</NavLink>
              </li>
              <li className="item-1" id="login">
                <button className = "bg-transparent border-0 text-white">Login</button>
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
                <span id="number">2</span>
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
