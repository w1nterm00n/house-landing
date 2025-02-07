import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';
import copyBtn from '../assets/copyBtn.svg';


function Footer() {

  const [value, setValue] = useState('+7 (992) 429 73 46');
  const [copied, setCopied] = useState(false);

  return (
    <footer>
        <div>
        <span className='phoneNumber'>
            <span className='copyPhoneNumber'>{value}
                <CopyToClipboard text={value}
                  onCopy={() => setCopied(true)}> 
                  <button><img src={copyBtn} alt="кнопка Копировать"/></button>
                </CopyToClipboard>
            </span>
            {copied ? <span style={{color: '#ababab', fontSize: '18px'}}> Скопировано! </span> : null}
        </span>

            <a href="https://wa.me/+79924297346"><img src={whatsapp} alt="whatsapp logo" /></a>
            <a href="https://t.me/Ilonayaaaa"><img src={telegram} alt="telegram logo" /></a>
        </div>
    </footer>
  )
}

export default Footer