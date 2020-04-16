import React from 'react';
import './index.scss';
// import './media.scss';
// import './bg-img.scss';



class Header extends React.Component {

    render() {

        return (
            <header className="container-fluid header">
        <div className="header-top-container">
            <div className="logo-container">
                <div className="logo"></div>
            </div>
            <div className="search-container">
                <input className="search" type="text" placeholder="Пошук" />
            </div>
            <div className="info-menu">
                <div className="info-menu-item hightligh">
                    <a href="#">Ремонт</a>
                </div>
                <div className="info-menu-item">
                    <a href="#">Розстрочка</a>
                </div>
                <div className="info-menu-item">
                    <a href="#">Оплата та доставка</a>
                </div>
                <div className="info-menu-item">
                    <a href="#">Контакти</a>
                </div>
            </div>
            <div className="header-icon-wrap">
                <i class="fa fa-shopping-bag"></i>
            </div>
        </div>
        <div className="header-menu">
            <ul className="menu-container">
                <li className="menu-item">
                    <a href="#">
                        <span>iPad</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>iPhone</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>Mac</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>Apple Watch</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>Аксесуари</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>Акції</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <span>Гаджети та музика</span>
                    </a>
                </li>
            </ul>
            <div className="online-chat-container">
                Чат онлайн
            </div>
            <div className="header-phone-container">
                <div className="header-phone-header">
                    Гаряча лінія
                </div>
                <div className="header-phone">
                    +38 (066) 00 444 88
                </div>
            </div>
        </div>
    </header>            
        )
    }
}

export default Header;