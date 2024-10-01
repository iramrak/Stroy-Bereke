import '../../src/sass/secondBanner.scss';
import arrpwbtn from '../../public/image/text-arrow.svg'
import { BsTelephoneFill } from "react-icons/bs";


export const SecondBanner = () => {
  return (
    <section className="second-banner">
        <div className="s-banner__content">
            <div className="s-banner__text">
              <h1>Хотите узнать больше? <br /> Напишите нам или позвоните</h1>
            </div>
            <div className="s-banner__btns">
              <a href="#">
                <div className="text-s btn">
                  <p>Написать нам</p>
                  <img src={arrpwbtn} alt="arrpwbtn" />
                </div>  
              </a>

              <a href="#">
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