import logo from '../../public/image/logo.png';
import { useState } from 'react';
import tellsvg from '../../public/image/tell-number-dark.svg'
import email from '../../public/image/email-llogo-dark.svg'
import '../../src/sass/stickyhead.scss';
import wapp from '../../public/image/whatsapp.svg'
import darknum from '../../public/image/tell-num-black.png'
import close from '../../public/image/close.svg'
import darkemail from '../../public/image/email-logo-dark.png'
import { BsTelephoneFill } from "react-icons/bs";

const Links = [
    {
        id: '1',
        href: '#',
        name: 'О нас'   
    },
    {
        id: '2',
        href: '#',
        name: 'Ассортимент'   
    },
    {
        id: '3',
        href: '#',
        name: 'Контакты'   
    },
    {
        id: '4',
        href: '#',
        name: 'Скачать Прайс-лист(PDF)'
    }
]
export const StickyHead = () => {

    const [burger__class , setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const [fix, setFix] = useState(false);

    function onScroll() {
        if (window.scrollY > 600) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
  
    window.addEventListener('scroll', onScroll);
    return (
    <div className={fix ? 'sticky' : 'sticky-hidden'}>
        <nav className='sticky-nav'>
                <div className="call-btn">
                    <BsTelephoneFill color='#Fff'/>
                </div>
            <ul className="navbar-sticky">
                    {Links?.map((link) => (
                        <li>
                            <a key={link.id} href={link.href}>{link.name}</a>
                        </li>
                    ))}
            </ul>
            <div className="logo-s">
                <img src={logo} alt="logo" />
                <h1>Береке<span>Строй</span></h1>
            </div>
            <div className="contacts">
                    <div className="tel__num">
                    <a href="tel:+77011829505"  target='_blank'>
                        <div className="num">
                            <img src={tellsvg} alt="tel" />
                            <h2>+7 701 182 9505</h2>
                        </div>
                        <p>с 9:00 до 21:00</p>
                    </a>
                    </div>
                    <div className="gmail__info">
                        <div className="gmail">
                            <img src={email} alt="tel" />
                            <h2>stroybereke@mail.ru</h2>
                        </div>
                        <p>Круглосуточно</p>
                    </div>
                    <a href="tel:+77011829505"  target='_blank'>
                        <div className="header__btn-s">
                            <p>Написать нам</p>
                        </div>
                    </a>
                </div>

                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                </div>
               <div className={menu_class}>
                    <img src={close} alt="close btn" onClick={updateMenu} className='close-btn'/>
                    <div className="menu__logo">
                        <img src={logo} alt='logo'/>
                        <h1>Береке<span>Строй</span></h1>
                    </div>
                    <ul className="menu__nav">
                        {Links?.map((link) => (
                        <li key={link.id}>{link.name}</li>
                        ))}
                    </ul>
                    <div className="menu__conatacts">
                        <div className="b_tel__num">
                        <a href="tel:+77011829505"  target='_blank'>
                            <div className="b-num">
                                <img src={darknum} alt="tel" />
                                <h2>+7 701 182 9505</h2>
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
                        <div className="b-btns">
                            <a href="#">
                                <div className="b-btn">
                                    Написать нам
                                </div>
                            </a>
                            <a href="tel:+77011829505"  target='_blank'>
                                <div className="b-wapp-btn">
                                    <img src={wapp} alt="whatsApp" />
                                </div>
                            </a>
                        </div>
                    </div>
               </div>
        </nav>
    </div>
  );
};