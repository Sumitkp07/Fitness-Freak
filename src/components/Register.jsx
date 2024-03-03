// import img1 from '../public/image/gorilla.png';
import React from "react";
const Register = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="left1">
            <span id="blue">FITN</span>NESS
          </div>
          <div className="logo1">
            <span id="red">FR</span>EAK
          </div>

          <h1 className="logo">
            <img src="../image/gorilla.png" alt="" />
          </h1>
          <ul className="list-parent" style={{listStyleType: "none"}}>
            <li className="item">
              <a href="https://mui.com/material-ui/material-icons/">Contact</a>
            </li>
            <li className="item">
              <a href="https://mui.com/material-ui/material-icons/">Home</a>
            </li>
            <li className="item">
              <a href="https://mui.com/material-ui/material-icons/">About</a>
            </li>
            <li className="item">
              <a href="https://mui.com/material-ui/material-icons/">Services</a>
            </li>
            <li className="item">
              <button className="login">Login</button>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <div className="form-box">
          <h1>Login</h1>
          <form action="">
            <div className="box">
              <input type="text" placeholder="Username" className="input-box" />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="box">
              <input type="text" placeholder="Email" className="input-box" />
            </div>
            <div className="box">
              <input
                type="password"
                placeholder="Passsword"
                className="input-box"
              />
            </div>
            <div className="line">
              <input type="checkbox" className="rember" />
              <span className="rembr">Remember me</span>
              <span className="forgot">Forgot Password ? </span>
              <br />
            </div>
            <div className="login-info">
              <button className="Login-btn">Login</button>
              <h3>
                Don't have an account ?<span className="register"> Register</span>
              </h3>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
