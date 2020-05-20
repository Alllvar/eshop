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
                <a className="py-1 px-2" href={href}>{text}</a>
            </div>
        )
    }

    render() {
        return (
            <header className="container-fluid header d-flex flex-column">
                <div className="header-top-container py-3 d-flex flex-row justify-content-center align-self-center w-100">
                    <div className="logo-container">
                        <div className="logo"></div>
                    </div>
                    <div className="search-container position-relative d-flex flex-row">
                        <input className="search w-100" type="text" placeholder="Пошук" />
                    </div>
                    <div className="info-menu mt-1 d-flex flex-row">
                        {INFO_MENU_ITEM.map(this.handleInfoItem)}
                    </div>
                    <div className="header-icon-wrap">
                        <i className="fa fa-shopping-bag"></i>
                    </div>
                </div>
                <div className="header-menu d-flex flex-row">
                    <ul className="menu-container d-flex flex-row">
                        {HEADER_MENU_CONTENT.map(this.handleMenuItem)}
                    </ul>
                    <div className="online-chat-container text-center">
                        Чат онлайн
                    </div>
                    <div className="header-phone-container d-flex flex-column">
                        <div className="header-phone-header align-self-end">
                            Гаряча лінія
                        </div>
                        <div className="header-phone align-self-end">
                            +38 (066) 00 444 88
                        </div>
                    </div>
                </div>
            </header>            
        )
    }
}

export default Header;