
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
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="app1">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
            <div>HELLO I AM YUVRAJ<br></br>MY NAME IS YUVRAJ</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
