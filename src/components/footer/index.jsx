import React from 'react';
import { FOOTER_NAV_LIST, FOOTER_NAV_INFO, CONTACT_US_NUMBERS } from '../../constants/index';

import '../../styles/footer/index.scss';

class Footer extends React.Component {
    handleFooterNavList = ({id, href, text}) => {
        return (
            <li key={id}>
                <a href={href}>
                    <span>{text}</span>
                </a>
            </li>
        )
    }

    handleFooterNavInfo = ({id, href, text}) => {
        return (
            <li key={id}>
                <a href={href}>
                    <span>{text}</span>
                </a>
            </li>
        )
    }

    handleNumbers = ({id, href, number}) => {
        return (
            <div key={id} className="contact-us-number">
                <a href={href}>{number}</a>
            </div>
        )
    }

    render() {
        return (
            <footer className="container-fluid footer">
                <div className="container footer-container">
                    <div className="row">
                    <div className="col-lg-2 col-md-6 col-sm-12 d-flex d-flex justify-content-center justify-content-lg-left align-items-md-center order-1 logo-footer-container">
                    <div className="logo-footer-wrap">
                        <div className="logo-footer"></div>
                    </div>
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 order-lg-2 justify-content-center order-3">
                        <div className="footer-category-container">
                            <div className="footer-category-title">Категорії товарів</div>
                            <ul className="footer-nav-list">
                                {FOOTER_NAV_LIST.map(this.handleFooterNavList)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 order-3 justify-content-center order-lg-2">
                        <div className="footer-info-container">
                            <div className="footer-info-title">Інформація та послуги</div>
                            <ul className="footer-nav-list">
                                {FOOTER_NAV_INFO.map(this.handleFooterNavInfo)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 order-2 order-lg-3 justify-content-center d-blok d-md-flex justify-content-center justify-content-lg-end">
                        <div className="contact-us-container">
                            <div className="contact-us-title">Зв’язок</div>
                            <div className="contact-us-numbers-container">
                                {CONTACT_US_NUMBERS.map(this.handleNumbers)}
                            </div>
                            <div className="contact-us-time">Пн.- Сб.: 10:00 - 19:00</div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;