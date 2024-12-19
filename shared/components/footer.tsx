import '../../src/sass/footer.scss';
import line from '../../public/image/Horizontal Divider.svg'
import logo from '../../public/image/logo.png'
import darknum from '../../public/image/tell-num-black.png'
import darkemail from '../../public/image/email-logo-dark.png'

export const Footer = () => {
    const Links = [
        {
            id: '1',
            href: '#about',
            name: 'О нас'   
        },
        {
            id: '2',
            href: '#assortment',
            name: 'Ассортимент'   
        },
        {
            id: '3',
            href: '#contact',
            name: 'Контакты'   
        },
        {
            id: '4',
            href: 'https://drive.google.com/file/d/1jPrkBd1mV6an5DsHrOE5N65bMgWoqDuK/view?usp=sharing',
            name: 'Скачать Прайс-лист(PDF)'
        }
    ]
  return (
    <footer>
        <div className="footer-container">
            <img src={line} alt="line" className='m-line'/>
            <div className="footer-nav">
                <div className="f-logo">
                    <img src={logo} alt="logo" />
                    <h1>Береке<span>Строй</span></h1>
                </div>
                <ul className="footer-navbar">
                    {Links?.map((link) => (
                        <li>
                            <a key={link.id} href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <a href="https://wa.me/77772786098" target='_blank' className='whataspp-btn'>
                    <div className="footer-btn">
                        <p>Написать нам</p>
                    </div>
                </a>
                <div className="menu__conatacts">
                        <div className="b_tel__num">
                        <a href="tel:+77088632472"  target='_blank'>
                            <div className="b-num">
                                <img src={darknum} alt="tel" />
                                <h2>+7 708 863 2472</h2>
                            </div>
                            <p>с 9:00 до 21:00</p>
                        </a>
                        </div>
                        <div className="b-email">
                            <div className="b-mail">
                                <img src={darkemail} alt="tel" />
                                <h2>stroybereke@mail.ru</h2>
                            </div>
                            <p>Круглосуточно</p>
                        </div>
                    </div>
            </div>
            
            <img src={line} alt="line" className='line'/>

            <div className="footer-des">
                <p>© 2024 Qut-Bereke KZ</p>
                <a href="#">Разработка сайта - Divine Studio</a>
            </div>
        </div>
    </footer>
  );
};