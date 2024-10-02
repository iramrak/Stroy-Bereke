import '../../src/sass/header.scss';
import logo from '../../public/image/logo.png';
import { useState } from 'react';
import { BsTelephoneFill } from "react-icons/bs";
import close from '../../public/image/close.svg'
import tellsvg from '../../public/image/tell-number.svg'
import email from '../../public/image/email-llogo.svg'
import wapp from '../../public/image/whatsapp.svg'
import darknum from '../../public/image/tell-num-black.png'
import darkemail from '../../public/image/email-logo-dark.png'

export const Header = () => {

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
            href: 'https://drive.google.com/file/d/1G9JtMvq76Ynxev6tQAR9Fz4uYRJL-8wx/view?usp=drive_link',
            name: 'Скачать Прайс-лист(PDF)'
        }
    ]
    return (
        <header>
            {/* left side (navbar) */}
            <nav className='nav'>
            <a href="tel:+77011829505"  target='_blank' className='call-btn-a'>
                <div className="call-btn">
                    <BsTelephoneFill/>
                </div>
            </a>
                <ul className="navbar">
                    {Links?.map((link) => (
                        <li>
                            <a key={link.id} href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                {/*logo*/}
                <div className="logo">
                    <img src={logo} alt='logo'/>
                    <h1>Береке<span>Строй</span></h1>
                </div>
                {/*right side contancts and btns*/}
                <div className="contacts">
                    <a href="tel:+77011829505"  target='_blank'>
                    <div className="tel__num">
                        <div className="num">
                            <img src={tellsvg} alt="tel" />
                            <h2>+7 701 182 9505</h2>
                        </div>
                        <p>с 9:00 до 21:00</p>
                    </div>
                    </a>    
                    <div className="gmail__info">
                        <div className="gmail">
                            <img src={email} alt="tel" />
                            <h2>stroybereke@mail.ru</h2>
                        </div>
                        <p>Круглосуточно</p>
                    </div>
                    <a href="https://wa.me/+77772786098" target='_blank'>
                        <div className="header__btn">
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
                         <li>
                         <a key={link.id} href={link.href}>{link.name}</a>
                        </li>
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
                            <a href="tel:+77011829505"  target='_blank'>
                                <div className="b-btn">
                                    Написать нам
                                </div>
                            </a>
                            <a href="https://wa.me/+77772786098" target='_blank'>
                                <div className="b-wapp-btn">
                                    <img src={wapp} alt="whatsApp" />
                                </div>
                            </a>
                        </div>
                    </div>
               </div>
            </nav>
            
        </header>
    );
};