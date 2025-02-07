import arrowSlider from '../assets/arrow-slider.svg'
import TextSlide from './CarouselOfTextSlide'
import { useState, useEffect } from 'react';
import { carouselTextArr } from '../assets/propertyData';

function CarouselOfText() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselTextArr.length);
    };
  
    const handlePrevious = () => {
      setCurrentSlide((prevSlide) =>
        (prevSlide - 1 + carouselTextArr.length) % carouselTextArr.length
      );
    };
    
    
    return (
      <div className='carouselOfText textSlide'>
        <TextSlide header={carouselTextArr[currentSlide].header}
                    text={carouselTextArr[currentSlide].text}  />

        <div className='sliderButtons'>
            <button onClick={handlePrevious}><img src={arrowSlider} alt="arrow" /></button>
            <span> {currentSlide+1} / {carouselTextArr.length}</span>
            <button onClick={handleNext} className='leftArrow'><img src={arrowSlider} alt="arrow" /></button>
        </div>
      </div>
    )
  }
  
  export default CarouselOfText