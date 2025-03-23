import React, { useState } from 'react'
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'

/**
 * Assets
 */

import tiendape from '../../assets/seguridadCarril.webp'
import weather from '../../assets/840_560.webp'
import foxbel from '../../assets/dispositivos.webp'
import peko from '../../assets/escalabilidad.webp'
import untels from '../../assets/capacidad.webp'

const projects = [
  {name: "Seguridad", image: tiendape},
  {name: "Cobertura y alcance", image: weather},
  {name: "Dispositivos", image: foxbel},
  {name: "Escalabilidad", image: peko},
  {name: "Capacidad y rendimiento", image: untels}
]

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <div></div>,
          prevArrow: <div></div>,
        }
      }]
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        <Slider {...settings}>
          {
            projects.map((el, index) => (
              <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                <img src={el.image} alt="" />
                <h3>{el.name}</h3>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Carousel