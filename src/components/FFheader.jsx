import React from 'react';
// import Mainimage from "../public/image/main.jpg";
const FFheader = () => {
  return (  
    <>

      {/* ================= MAIN SECTION ================ */}

      <section className="main">
        <div className="main-container">
          <img src="../image/main.jpg" alt="" />
          <div className="main-headlines">
            <span className="main-words">
              <span className="red">WORK HARDER</span>, GET STRONGER{" "}
            </span>
            <h2 className="main-headline">
              EASY WITH OUR <span className="red">GYM</span>
            </h2>
            <button className="main-headline-login">BECOME A MEMBER</button>
          </div>
        </div>
        <div className="black"></div>
      </section>
    </>
  );
};

export default FFheader;
