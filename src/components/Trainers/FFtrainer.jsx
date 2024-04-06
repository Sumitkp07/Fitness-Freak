import { useEffect } from 'react';
import TrainerCard from '../Trainers/TrainerCard';
import TrainersData from '../../Assets/TrainersData';
import Aos from "aos";
import "aos/dist/aos.css";

const FFtrainer = () => {

  useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
  }, [])
  return (
    <>

   <section className="trainer" id="trainer">
    <div className="container">
      <h1 data-aos="zoom-in" ><span className="trainer-heading">Our collabs</span></h1>
      <div className="box-container">
      {TrainersData.map((val, index)=>{
        return(
          <TrainerCard
          key = {index} 
          image={val.img}
          name = {val.titlename}
          para = {val.para}
          />
        );
      })}
      </div>
      </div>
    </section>

    <div class="pricing-header my-5 p-3 pb-md-4 mx-auto text-center">
    <h1 data-aos="zoom-in"><span id='Membership'>Membership Plans</span></h1>
  <p data-aos="zoom-in" class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Price section It’s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsum labore quaerat similique</p>
</div>
<div class="container "style={{marginBottom:'5%'}}>
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center " >
  <div data-aos="zoom-in" class="col">
    <div class="card mb-4 rounded-3 border-secondary main-box">
      <div class="card-header py-3" style={{backgroundColor:"#242424",color:'wheat'}}>
        <h4 class="my-0 fw-normal bg-s"><strong>PLATINUM</strong></h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$29<small class="fw-light"style={{color:"red",fontSize:"1.9rem"}}>/3mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Weight Lifting</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Cardio</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Yoga</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Nutrition</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Explosive training</li>
        </ul>
        <button  style={{backgroundColor:'brown'}} type="button" class="w-50 btn btn-sm text-white">Sign up for free</button>
      </div>
    </div>
  </div>
  <div data-aos="zoom-in" class="col">
    <div class="card mb-4 rounded-3  border-secondary main-box">
      <div class="card-header py-3" style={{backgroundColor:"gold"}}>
        <h4 class="my-0 fw-normal"><strong className='text-black text-2xl'>GOLD</strong></h4>
      </div>
      <div class="card-body" id='gold'>
        <h1 class="card-title pricing-card-title">$67<small class="fw-light"style={{color:"red",fontSize:"1.9rem"}}>/6mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
        <li><i className="fas fa-check"  style={{color:"grey"}}></i> Weight Lifting</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Cardio</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Yoga</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Nutrition</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Explosive training</li>
        </ul>
        <button style={{backgroundColor:'black'}} type="button" class="w-50 btn btn-sm text-white">Get started</button>
      </div>
    </div>
  </div>
  <div data-aos="zoom-in" class="col">
    <div class="card mb-4 rounded-3  border-secondary main-box">
      <div class="card-header py-3 " style={{backgroundColor:"#242424",color:'wheat'}}>
        <h4 class="my-0 fw-normal"><strong>SILVER</strong></h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$60<small class=" fw-light"style={{color:"red",fontSize:"1.9rem"}}>/12mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
        <li><i className="fas fa-check"  style={{color:"grey"}}></i> Weight Lifting</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Cardio</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Yoga</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Nutrition</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Explosive training</li>
        </ul>
        <button style={{backgroundColor:'silver'}} type="button" class="w-50 btn btn-sm text-black">Contact us</button>
      </div>
    </div>
  </div>
</div>
</div> text-white


    </>
  )
}

export default FFtrainer
