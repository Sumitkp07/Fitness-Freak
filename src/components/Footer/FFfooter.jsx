import React from 'react';

const FFfooter = () => {
  return (
    <>
      <footer id='footer' className="py-2 pt-5">
        <div className="container py-3">
        <div className="row footer-content">
          <div className="col-6 col-md-2 mb-3">
            <h5 className='mb-4 '> <span className='heading1'>Services</span></h5>
            <ul className="nav flex-column footer-nav1">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Nutrition</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5 className='mb-4'><span className="heading2">Opening hours</span></h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Monday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Tuesday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Wednesday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Thrusday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Friday</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-3 mb-3">
            <h5 className='mb-4'><span className="heading3">Contact info</span></h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><span><i className="fa-brands fa-map fa-sm"></i></span> 780 S Arroyo Parkway Pasadena, CA 91105 California</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><i className="fa-brands fa-map fa-sm"></i> +1 626-263-0683</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><i className="fa-brands fa-map fa-sm"></i><span style={{textDecoration:"underline"}}> fitnessfreak@gmail.com</span></a></li>
            </ul>
          </div>
    
          <div className="col-md-4 offset-md-1">
            <form>
              <h3>Give Feedback to our Mail</h3>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-outline-danger" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        </div>
    
        <div className="parent-list d-flex flex-column  justify-content-center align-items-center pt-4 pb-2 my-0 border-top">
         <p> <strong>Fitness<span style={{color: "red"}}>Freak</span>
         </strong> © 2024 Company, Inc. All rights reserved.</p>
          <ul className="d-flex justify-content-center align-item-center list-unstyled px-5 my-0">
            <li className="ms-3"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-twitter fa-lg"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-facebook fa-lg"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="/">
            <i className="fa-brands fa-instagram fa-lg" ></i></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default FFfooter;
