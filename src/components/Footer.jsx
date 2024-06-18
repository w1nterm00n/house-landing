import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'


function Footer({phoneNumber}) {

  return (
    <footer>
        <div>
            <span className='phoneNumber'>{phoneNumber}</span>
            <a href="#!"><img src={whatsapp} alt="whatsapp logo" /></a>
            <a href="#!"><img src={telegram} alt="telegram logo" /></a>
        </div>
    </footer>
  )
}

export default Footer