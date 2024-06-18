import photo1_s from '../photos/housephoto1_s.jpg'
import photo2_s from '../photos/housephoto2_s.jpg'
import photo3_s from '../photos/housephoto3_s.jpg'
import photo4_s from '../photos/housephoto4_s.jpg'

import photo1_m from '../photos/housephoto1_m.jpg'
import photo2_m from '../photos/housephoto2_m.jpg'
import CarouselOfPhotos from './CarouselOfPhotos'
import CarouselOfText from './CarouselOfText'

import x from '../assets/x.svg'
import { useState } from "react";


function PhotosSection() {

  const [showCarousel, setShowCarousel] = useState(false);


  let showHui = function () {
    
    setShowCarousel(!showCarousel);
  };

  

    return (
      <div className='PhotosSection'>

        <div className="container-b">
        <h3>Фотографии объекта</h3>
          <div className="container-m">
            <div className="child child-b"><img src={photo1_m} alt="big photo" /></div>
            
            <div className="container-s">
              <div className="child"><img src={photo1_s} alt="small photo" /></div>
              <div className="child"><img src={photo3_s} alt="small photo" /></div>
            </div>
          </div>


          <div className="container-m container-m-bottom">
            <CarouselOfText/>
            <div className="container-s">
              <div className="child"><img src={photo2_s} alt="small photo" /></div>
              <div className="child"><img src={photo4_s} alt="small photo" /></div>
            </div>

            <div className="child child-b"><img src={photo2_m} alt="big photo" /></div>
          </div>
        </div>
    
      <button className='morePhotos' onClick={showHui}>Больше фото</button>


      {showCarousel && 
          <>
            <div className="overlay">
                <button className='closeBtn' onClick={showHui}><img src={x} alt="x" /></button>
            </div>
            <CarouselOfPhotos />
          </>
      }

      </div>
    )
  }
  
  export default PhotosSection