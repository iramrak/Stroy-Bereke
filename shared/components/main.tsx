import { Header } from './header';
import '../../src/sass/main.scss';
import defBtn from '../../public/image/main-def-btn.png';


export const Main = () => {
  return (
    <main className='main'>
        <Header />  
        <div className="main__content">
            <h1>
                <span>БерекеСтрой</span> -  Стройматериалы для <br /> вашего бизнеса по доступным ценам
            </h1>
            <a href="#">
                <div className="main-def__btn">
                    Получить консультацию
                    <img src={defBtn} alt="defBtn" />
                </div>
            </a>
        </div>
    </main>
  );
};