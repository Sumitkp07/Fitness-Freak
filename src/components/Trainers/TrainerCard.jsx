import React from 'react';

const TrainerCard = (props) => {
  return (
    <>
         <div data-aos="zoom-in" className="box" id="andre">
          <img src={props.image} alt="" />
          <div className="info">
          </div>
          <div className="Trainer-overlay">
            <div className="overlay-content">
            <h3>{props.name}</h3>
            <p>{props.para}</p>
            <ul className="d-flex justify-content-center align-item-center list-unstyled my-0">
            <li className="mx-2"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-twitter fa-lg"></i></a></li>
            <li className="mx-2"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-facebook fa-lg"></i></a></li>
            <li className="mx-2"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-instagram fa-lg" ></i></a></li>
          </ul>
            </div>

          </div>
        </div>
    </>
  );
}

export default TrainerCard;
