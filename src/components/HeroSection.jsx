import map from '../assets/map-pin.png'
import arrow from '../assets/arrow.svg'
import Header from './Header'
import { propertyDetails, propertyHighlights } from '../assets/propertyData';
import PropertyDetail from './PropertyDetail'
import PropertyHighlight from './PropertyHighlights'
import { useState, useEffect } from "react";

function HeroSection() {

    //вычисление цены 1 кв м
    const [totalPrice, setTotalPrice] = useState("10 999 000");
    const [meterPrice, setMeterPrice] = useState("10 999 000");

    let calcMeterPrice = function (totalPrice) {
        const numberStr = totalPrice.replace(/\s+/g, '');
        const price = Number(numberStr);
        const priceForMeter = Math.floor(price / 170);
        setMeterPrice(priceForMeter);
    };

    useEffect(() => {
        calcMeterPrice(totalPrice);
    }, []);
    //вычисление цены 1 кв м

    return (
      <div className='HeroSection'>
        <Header/>
        <div className='mainInfo'>
            <h2>ПРОДАЁТСЯ</h2>
            <h1>Дом 170 м&#178; в Кетово на участке 20 соток</h1>


            <div className="propertyDetails">
                {propertyDetails.map((item, index) => (
                    <PropertyDetail
                    key={index}
                    detail={item.detail}
                    value={item.value}
                    style={item.style} // Если стиль задан, он применится
                    />
                ))}
            </div>


            <div className="propertyHighlights">
                {propertyHighlights.map((item, index) => (
                    <PropertyHighlight
                    key={index}
                    highlight={item.highlight}
                    />
                ))}
            </div>

            <div className='ActionPanel'>
                <button className='blueBtn'>
                    <div>
                        <img src={map} alt="map pin" />
                    </div>
                    <a href="#map">Посмотреть на карте</a>
                </button>

                <button className='blueBtn'>
                    <div>
                        <img src={arrow} alt="arrow pin" />
                    </div>
                    <a href="#description">Подробнее об объекте</a>
                </button>
            </div>
    
        </div>
      </div>
    )
  }
  
  export default HeroSection