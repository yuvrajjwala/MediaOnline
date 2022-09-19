
import { useState } from "react";
import Slider from "react-slick";
import tv from "../../assets/img/home/lock.png";
import tv1 from "../../assets/img/home/lock.png";
import tv2 from "../../assets/img/home/lock.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './Testimonial.css'

const images = [tv1, tv2, tv];

function Testimonial() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      beforeChange: (current, next) => setImageIndex(next),
    };
  
    const slidesData = [
      {
        id: 1,
        title: 'repellendus',
        label: 'Dolorem offs temporibus.'
      }, {
        id: 2,
        title: 'excepturi ',
        label: 'Officia non pt do et neque.'
      }, {
        id: 3,
        title: 'eius ',
        label: 'Ut recusandae vee moles .'
      }, {
        id: 4,
        title: 'nihil vos',
        label: 'Qui vel consequatur recus.'
      }, {
        id: 5,
        title: 'nemo dolorem ',
        label: 'Placeat odit velue atem.'
      }, {
        id: 6,
        title: 'dolorem ',
        label: 'Adipisci officdiandae.'
      },
    ];
    const [imageIndex, setImageIndex] = useState(0);
  
    return (
      <div className="App1">
  
        <div className="slider-wrapper">
  
          <Slider {...settings}>
  
            {slidesData.map((slide, idx) =>
  
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={slide.id}>
                <h2 className="slick-slide-title">{slide.title}</h2>
                <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                <label className="slick-slide-label">{slide.label}</label>
              </div>
  
            )}
  
          </Slider>
  
        </div>
  
      </div>
    );
  }

export default Testimonial;
