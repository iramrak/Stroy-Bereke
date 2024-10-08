import '../../src/sass/assortment.scss';
import cardone from '../../public/image/a-card-one.webp';
import cardtwo from '../../public/image/a-card-two.webp';
import cardthree from '../../public/image/a-card-three.webp';
import cardfour from '../../public/image/a-card-four.webp';

export const Assortment = () => {
    return(
        <section className="assortment" id='assortment'>
            <div className="a-sub-title">
                <p>[03] - Ассортимент</p>
            </div>
            <div className="a-title">
                <h1>Наш широкий <span>Ассортимент</span></h1>
            </div>
            <div className="assortment__content">
                <div className="first-row">
                    <div className="a-card a-one">
                        <img src={cardone} alt="cardone" />
                        <h1>Строительные инструменты <br /> и хозтовары</h1>
                    </div>
                    <div className="a-card a-two">
                        <img src={cardtwo} alt="cardtwo" />
                        <h1>Электрические <br /> инструменты</h1>
                    </div>
                    <div className="space"></div>
                </div>

                <div className="second-row">
                    <div className="space"></div>
                    <div className="a-card a-three">
                        <img src={cardthree} alt="cardthree" />
                        <h1>Садовые, огородные <br /> товары, спец одежда</h1>
                    </div>
                    <div className="a-card a-four">
                        <img src={cardfour} alt="cardfour" />
                        <h1>Краны (запорно - арматурные) </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};