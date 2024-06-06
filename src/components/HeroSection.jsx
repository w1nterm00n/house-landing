import map from '../assets/map-pin.png'
import Header from './Header'
import PropertyDetail from './PropertyDetail'
import PropertyHighlight from './PropertyHighlights'

function HeroSection() {

    return (
      <div className='HeroSection'>
        <Header phoneNumber="+7 (996) 147 68 00"/>

        <div className='mainInfo'>
            <h1>Дом 170 м2 в Кетово на участке 20 соток</h1>

            <div className='propertyDetails'>
                <PropertyDetail detail="Цена объекта" value="13 300 000 ₽"/>
                <PropertyDetail detail="Цена 1 кв. м." value="78 235 ₽"/>
                <PropertyDetail detail="Площадь дома" value="170 м2"/>
                <PropertyDetail detail="Площадь участка" value="20 соток"/>
            </div>
            
            <div className='propertyHighlights'>
                <PropertyHighlight highlight="Участок на берегу озера Щучье"/>
                <PropertyHighlight highlight="Высота 1 этажа: 3.6 метра"/>
                <PropertyHighlight highlight="Два выхода, один из них на озеро"/>
                <PropertyHighlight highlight="Год постройки: 2015"/>
                <PropertyHighlight highlight="Площадь второго дома: 66 м2"/>
                <PropertyHighlight highlight="Материал стен: газоблоки"/>
                <PropertyHighlight highlight="Паводок 2024 года дом не задел"/>
                <PropertyHighlight highlight="На участке находятся два дома, продаются по цене одного."/>
            </div>

            <div className='ActionPanel'>
                <button className='mapBtn'>
                    <div>
                        <img src={map} alt="map pin" />
                    </div>
                    <a href="#!">Посмотреть на карте</a>
                </button>

                <button className='moreAboutObject'>
                    <a href="#!">
                        🡣 Подробнее об объекте
                    </a>
                </button>
            </div>
    
        </div>
      </div>
    )
  }
  
  export default HeroSection