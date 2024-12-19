import { Header } from './header';
import '../../src/sass/main.scss';
import defBtn from '../../public/image/main-def-btn.png';


export const Main = () => {
  return (
    <main className='main'>
        <Header />  
        <div className="main__content">
            <h1>
                <span>БерекеСтрой</span> - Стройматериалы для вашего  <br />бизнеса по доступным ценам в Казахстане
            </h1>
             <a href="https://wa.me/UR_NUMBER" target='_blank' className='whataspp-btn'>
                <div className="main-def__btn">
                    Получить консультацию
                    <img src={defBtn} alt="defBtn" />
                </div>
            </a>
        </div>
    </main>
  );
};
