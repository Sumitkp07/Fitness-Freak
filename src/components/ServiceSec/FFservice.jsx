import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const FFservice = () => {
      useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);
  return (
    <>
    <section className="service" id="service">
      <h1 data-aos="zoom-in"><span id='heading'>our services</span></h1>
      <div id='service-container' className="container mt-5 d-flex ">
      <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Price section It’s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsum labore quaerat similique</p>
        <div data-aos="fade-right" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/img1.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Treadmill</h3>
              <p>
                A treadmill is a device generally used for walking, running, or
                climbing while staying in the same place. Treadmills were
                introduced before the development of powered machines to harness
                the power of animals or humans to do work.
              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/img2.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Yoga</h3>
              <p>
                Yoga is a mind and body practice. Various styles of yoga combine
                physical postures, breathing techniques is an ancient practice
                that may have originated in India. It involves movement,
                meditation, and breathing techniques.
              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/img3.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Trainer</h3>
              <p>
                Fitness trainers and instructors lead, instruct, and motivate
                individuals or groups in exercise activities, including
                cardiovascular workouts (for the heart and blood circulation),
                strength training, and stretching. They work with people of all
                ages and skill levels.
              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/img5.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Boxing</h3>
              <p>
                Boxing is a combat sport in which two people, usually wearing
                protective gloves and other protective equipment such as hand
                wraps and mouthguards, throw punches at each other for a
                predetermined amount of time in a boxing ring..

              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/img4.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Equipments</h3>
              <p>
                The starting point of a fitness journey is difficult and scary.
                If you're at this point, ready to make some serious lifestyle
                changes, one visit to your local gym can freeze your intentions
                of working out in the gym.

              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="box col-xl-6 col-lg-6 my-4">
          <img src="../image/image9.jpg" alt="" />
          <div className="overlay">
            <div className="service-info">
              <h3>Weight Lifting</h3>
              <p>
                A weightlifter is given three snatch attempts and three clean
                and jerk attempts each. A weightlifter’s best attempt at snatch
                and the clean and jerk are then added up and the one with the
                highest combined weight lifted is declared the winner.
              </p>
              <a href=" "><button className="service-info-btn">more</button></a>
            </div>
          </div>
        </div>
      </div>  
    </section>
    </>
  )
}

export default FFservice;
