import '../../src/sass/secondBanner.scss';
import arrpwbtn from '../../public/image/text-arrow.svg'
import { BsTelephoneFill } from "react-icons/bs";


export const SecondBanner = () => {
  return (
    <section className="second-banner" id='contact'>
        <div className="s-banner__content">
            <div className="s-banner__text">
              <h1>Хотите узнать больше? <br /> Напишите нам на WhatsApp или позвоните</h1>
            </div>
            <div className="s-banner__btns">
            <a href='/whatsapp' target='_blank' className='whataspp-btn'>
                <div className="text-s btn">
                  <p>Написать нам</p>
                  <img src={arrpwbtn} alt="arrpwbtn" />
                </div>  
              </a>

              <a href="tel:+77011829505"  target='_blank'>
                <div className="call-s btn">
                  <p>Позвонить нам</p>
                  <div className="callbtn">
                    <BsTelephoneFill color='#FFf'/>
                  </div>
                </div>
              </a> 
            </div>
        </div>
    </section>
  );
};