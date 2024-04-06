import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FFabout =()=>{
    useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 100,
        easing: "ease-in-sine",
        delay: 0,
      });
    }, []);
    return(
        <>
      <section className="about" id="about">
      <h1 data-aos="zoom-in" ><span className="about-heading">ABOUT US</span></h1>
        <div className="container mt-5">
        <div className="about-content">
          <div data-aos="flip-left" className="image">
          <img src="../image/about.jpg" alt="" />
          </div>
          <div data-aos="zoom-in" className="box-content">
          <h3>A WORD ABOUT US</h3>
          <p id="para">
            At Gym and Fitness, customers are at the centre of what we do and
            why we do it! We have a team of knowledgeable sales representatives
            who are ready to assist you with your gym equipment needs. Our crew
            will be able to answer your questions from honest product
            information to the best way to integrate a piece of equipment into
            your workout routine. We work hard to ensure we have strong
            relationships with our suppliers, bringing you the best possible
            prices in the industry.
          </p>
          <button data-aos="zoom-in" className="about-btn">Learn more</button>
          </div>
        </div>
        </div>
    </section>
        </>
    );
}

export default FFabout;