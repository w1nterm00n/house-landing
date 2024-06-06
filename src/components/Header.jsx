import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'


function Header({phoneNumber}) {

  return (
    <header>
        <div>
            <a href="#!"><img src={whatsapp} alt="whatsapp logo" /></a>
            <a href="#!"><img src={telegram} alt="telegram logo" /></a>
            <span className='phoneNumber'>{phoneNumber}</span>
        </div>
    </header>
  )
}

export default Header
