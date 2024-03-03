import React from 'react'
import TrainerCard from './TrainerCard';
import TrainersData from '../Assets/TrainersData';
const FFtrainer = () => {

  return (
    <>
   <section className="trainer" id="trainer">
    <div className="container">
      <h1 className="trainer-heading">our trainers</h1>

      <div className="box-container">
      {TrainersData.map((val, index)=>{
        return(
          <TrainerCard
          key = {index} 
          image={val.img}
          name = {val.titlename}
          />
        );
      })}
      </div>
      </div>
    </section>

   {/* <section className="plan" id=" plan">
      <h1 className="heading">membership plan</h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">basic</h3>
          <h3 className="price">$10<span>/mo</span></h3>
          <h3 className="month">3 months</h3>
          <ul>
            <li><i className="fas fa-check"></i>weight lifting</li>
            <li><i className="fas fa-check"></i>cardio</li>
            <li><i className="fas fa-check"></i>yoga</li>
            <li><i className="fas fa-check"></i>training</li>
            <li><i className="fas fa-check"></i>protein powder</li>
          </ul>
          <a href="/"><button className="btn">check out</button></a>
        </div>

        <div className="box">
          <h3 className="title">standard</h3>
          <h3 className="price">$20<span>/mo</span></h3>
          <h3 className="month">6 months</h3>
          <ul>
            <li><i className="fas fa-check"></i>weight lifting</li>
            <li><i className="fas fa-check"></i>cardio</li>
            <li><i className="fas fa-check"></i>yoga</li>
            <li><i className="fas fa-check"></i>training</li>
            <li><i className="fas fa-check"></i>protein powder</li>
          </ul>
          <a href="/"><button className="btn">check out</button></a>
        </div>
      </div>
    </section>  */}
    <div class="pricing-header my-5 p-3 pb-md-4 mx-auto text-center">
    <h1><span id='Membership'>Membership Plans</span></h1>
  <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Price section It’s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsum labore quaerat similique</p>
</div>
<div class="container "style={{marginBottom:"90px !important;"}}>
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center " >
  <div class="col">
    <div class="card mb-4 rounded-3 border-secondary main-box">
      <div class="card-header py-3" style={{backgroundColor:"green"}}>
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
        <button type="button" class="w-100 btn btn-lg btn-outline-success">Sign up for free</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-4 rounded-3  border-secondary main-box">
      <div class="card-header py-3" style={{backgroundColor:"cyan"}}>
        <h4 class="my-0 fw-normal"><strong>SILVER</strong></h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$67<small class="fw-light"style={{color:"red",fontSize:"1.9rem"}}>/6mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
        <li><i className="fas fa-check"  style={{color:"grey"}}></i> Weight Lifting</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Cardio</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Yoga</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Nutrition</li>
          <li><i className="fas fa-check"  style={{color:"grey"}}></i> Explosive training</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-info">Get started</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card mb-4 rounded-3  border-secondary main-box">
      <div class="card-header py-3 " style={{backgroundColor:"gold"}}>
        <h4 class="my-0 fw-normal"><strong>GOLD</strong></h4>
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
        <button type="button" class="w-100 btn btn-lg btn-outline-warning">Contact us</button>
      </div>
    </div>
  </div>
</div>
</div>


    </>
  )
}

export default FFtrainer
