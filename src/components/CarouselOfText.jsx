import arrowSlider from '../assets/arrow-slider.svg'
import TextSlide from './CarouselOfTextSlide'
import { useState, useEffect } from 'react';

function CarouselOfText() {

    let carouselTextArr = [
        {header: "Header 1", text: "text 1 blah blah"},
        {header: "Header 2", text: "text 2 blah blah"},
        {header: "Header 3", text: "text 3 blah blah"},
        {header: "Header 4", text: "text 4 blah blah"},
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselTextArr.length);
    };
  
    const handlePrevious = () => {
      setCurrentSlide((prevSlide) =>
        (prevSlide - 1 + carouselTextArr.length) % carouselTextArr.length
      );
    };
    
    //автоматически переключается на след слайд каждые 5 сек
    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    
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