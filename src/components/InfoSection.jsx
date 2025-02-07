import cover from '../photos/infoSectionPic.webp'
import book from '../assets/reed.svg'
import { useState, useEffect } from 'react';
import { longDescription } from '../assets/propertyData';

function InfoSection() {
    const [shortDescription, setShortDescriptionl] = useState("");
    const [isLongDesc, setIsLongDesc] = useState(false);

    useEffect(() => {
        function cropDescription(longDescription) {
          const wordsArr = longDescription.trim().split(/\s+/);
          if (wordsArr.length > 60) {
            let str = wordsArr.slice(0, 60).join(' ');
            setShortDescriptionl(str + "...");
            setIsLongDesc(true);
          } 
        }
        cropDescription(longDescription);
      }, []);
    

    let showFullDesc = function () {
        setIsLongDesc(!isLongDesc);
    }

    const renderDescription = (description) => {
        return description.trim().split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    }

    return (
      <div className="infoSection">
          <img className='housePhoto' src={cover} alt="фотография дома" />
          <p><a name="description"></a></p>
          <div className="textInfo">
                <h5>Всё, что нужно знать об этом доме</h5>

                {isLongDesc ? (
                    <>
                        {renderDescription(shortDescription)}
                        <div className='lightening'></div>
                    </>
                ) : (
                    renderDescription(longDescription)
                )}
          </div>

          <button className="readMore" onClick={showFullDesc}> <img src={book} alt="иконка книги" /> 
            {isLongDesc ? "Читать полностью" : "Скрыть"}
          </button>
      </div>
    )
  }
  
  export default InfoSection
  