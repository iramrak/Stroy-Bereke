import '../../src/sass/about.scss';
import storei from '../../public/image/strore-icon.svg';
import tg from '../../public/image/tg-icon.svg';
import kar from '../../public/image/kar-icon.svg';
import arrow from '../../public/image/arrow.svg'

export const About = () => {
  return (
    <section className="about" id='about'>
        <div className="mini-title">
            <p>[01] - О компании</p>
        </div>
        <div className="about__title">
            <h1><span>БерекеСтрой</span> — ваш надежный <br /> поставщик стройматериалов <br /> оптом/в розницу с широким <br /> ассортиментом</h1>
        </div>
        <div className="about__cards">
            <div className="card one">
                <div className="card__img">
                    <img src={kar} alt="storei" />
                </div>
                <p>Широкий ассортимент стройматериалов для вашего бизнеса</p>
            </div>
            <div className="card two">
                <div className="card__img">
                    <img src={tg} alt="tg" />
                </div>
                <p>Лучшие цены на рынке, <br />экономия без потери качества</p>
            </div>
            <div className="card three">
                <div className="card__img">
                    <img src={storei} alt="kar" />
                </div>
                <p>Все материалы в наличии <br /> в Астане для быстрой <br /> доставки</p>
            </div>
            <div className="card four">
            <a href="https://wa.me/+77772786098" target='_blank'>
                    <div className="about-call__btn">
                        <p>Написать нам</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                </a>
                <p>Остались вопросы ?  <br />Свяжитесь с нами по WhatsApp</p>
            </div>
        </div>
    </section>
  );
};