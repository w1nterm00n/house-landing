import arrowSlider from '../assets/arrow-slider.svg'
import whiteArrow from '../assets/white_arrow.svg'
import { useState } from 'react';
import photo1 from '../photos/photo_2024-01-27_15-21-18.webp';
import photo2 from '../photos/photo_2024-02-04_14-27-55.webp';
import photo3 from '../photos/photo_2024-06-07_15-04-23.webp';
import photo4 from '../photos/photo_2024-01-27_15-23-31.webp';
import photo5 from '../photos/photo_2024-02-04_14-27-58.webp';
import photo6 from '../photos/photo_2024-06-07_15-04-29.webp';
import photo7 from '../photos/photo_2024-01-27_15-23-34.webp';
import photo8 from '../photos/photo_2024-06-07_15-03-37.webp';
import photo9 from '../photos/photo_2024-06-07_15-04-35.webp';
import photo10 from '../photos/photo_2024-01-27_15-23-35.webp';
import photo11 from '../photos/photo_2024-06-07_15-03-45.webp';
import photo12 from '../photos/photo_2024-06-14_18-57-12.webp';
import photo13 from '../photos/photo_2024-01-27_15-23-36.webp';
import photo14 from '../photos/photo_2024-06-07_15-03-52.webp';
import photo15 from '../photos/photo_2024-01-29_12-14-42.webp';
import photo16 from '../photos/photo_2024-06-07_15-04-00.webp';
import photo17 from '../photos/photo_2024-06-14_18-57-21.webp';
import photo18 from '../photos/photo_2024-01-27_15-21-15.webp';
import photo19 from '../photos/photo_2024-02-04_14-27-49.webp';
import photo20 from '../photos/photo_2024-06-07_15-04-06.webp';
import photo21 from '../photos/photo_2024-01-27_15-21-16.webp';
import photo22 from '../photos/photo_2024-02-04_14-27-52.webp';
import photo23 from '../photos/photo_2024-06-07_15-04-16.webp';



function CarouselOfPhotos() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const photosArr = [
      photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
      photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
      photo21, photo22, photo23
    ];
    

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

        <button onClick={handlePrevious}><img src={whiteArrow} alt="arrow" /></button>
        <img className='sliderPhoto' src={photosArr[currentSlide]} alt="photo" />
        <button onClick={handleNext} className='leftArrow'><img src={whiteArrow} alt="arrow" /></button>
   
      </div>
    )
  }
  
  export default CarouselOfPhotos