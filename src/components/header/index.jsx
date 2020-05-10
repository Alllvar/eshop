import React from 'react';
import { HEADER_MENU_CONTENT, INFO_MENU_ITEM } from '../../constants/index';
import '../../styles/header/index.scss';


class Header extends React.Component {
    handleMenuItem = ({id, href, text}) => {
        return (
            <li key={id} className="menu-item">
                <a href={href}>
                    <span>{text}</span>
                </a>
            </li>
        )
    }

    handleInfoItem = ({id, href, text}) => {
        return (
            <div key={id} className="info-menu-item">
                <a href={href}>{text}</a>
            </div>
        )
    }

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
                        {INFO_MENU_ITEM.map(this.handleInfoItem)}
                    </div>
                    <div className="header-icon-wrap">
                        <i className="fa fa-shopping-bag"></i>
                    </div>
                </div>
                <div className="header-menu">
                    <ul className="menu-container">
                        {HEADER_MENU_CONTENT.map(this.handleMenuItem)}
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