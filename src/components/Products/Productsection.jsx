import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductsData from "../../Assets/ProductsData";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Productsection = () => {
    useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            arrows : true
          },
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows : true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // initialSlide: 1,
            arrows : false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : false
          }
        }
      ]
    };
  return (
    <>
      <section id="products">
        <h1 data-aos="zoom-in">
          <span className="products-heading">Our products</span>
        </h1>
        <div data-aos="zoom-in" className="pricing-header mb-5">
          <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Price section It’s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsum labore quaerat similique</p>
        </div>
        <div className="container ">
          <div className="row">
            <div data-aos="slide-up" id="products-container ">
            <Slider {...settings}>
              {ProductsData.map((val, index) => {
                return (
                  <ProductCard
                    key={index}
                    image={val.image}
                    title={val.title}
                    para={val.para}
                    price = {val.price}
                  />
                );
              })}
            </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productsection;
