import arrowSlider from '../assets/arrow-slider.svg'
import { useState } from 'react';
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg'
import photo4 from '../photos/photo4.jpg'


function CarouselOfPhotos() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const photosArr = [photo1, photo2, photo4];


    const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photosArr.length);
    };

    const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
        (prevSlide - 1 + photosArr.length) % photosArr.length
    );
    };

    return (
      <div className='photosSlider'>

        <button onClick={handlePrevious}><img src={arrowSlider} alt="arrow" /></button>
        <img src={photosArr[currentSlide]} alt="photo" />
        <button onClick={handleNext} className='leftArrow'><img src={arrowSlider} alt="arrow" /></button>
   
      </div>
    )
  }
  
  export default CarouselOfPhotos