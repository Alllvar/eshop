import React from 'react';
import './index.scss';

class Footer extends React.Component {
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
                            <li>
                                <a href="#">iPad</a>
                            </li>
                            <li>
                                <a href="#">iPhone</a>
                            </li>
                            <li>
                                <a href="#">Mac</a>
                            </li>
                            <li>
                                <a href="#">Apple Watch</a>
                            </li>
                            <li>
                                <a href="#">Аксесуари</a>
                            </li>
                            <li>
                                <a href="#">Акції</a>
                            </li>
                            <li>
                                <a href="#">Гаджети та музика</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 order-3 justify-content-center order-lg-2">
                    <div className="footer-info-container">
                        <div className="footer-info-title">Інформація та послуги</div>
                        <ul className="footer-nav-list">
                            <li>
                                <a href="#">Ремонт</a>
                            </li>
                            <li>
                                <a href="#">Розстрочка</a>
                            </li>
                            <li>
                                <a href="#">Оплата та доставка</a>
                            </li>
                            <li>
                                <a href="#">Контакти</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 order-2 order-lg-3 justify-content-center d-blok d-md-flex justify-content-center justify-content-lg-end">
                    <div className="contact-us-container">
                        <div className="contact-us-title">Зв’язок</div>
                        <div className="contact-us-numbers-container">
                            <div className="contact-us-number">
                                <a href="#">+38 (096) 00 444 88</a>
                            </div>
                            <div className="contact-us-number">
                                <a href="#">+38 (066) 00 444 88</a>
                            </div>
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