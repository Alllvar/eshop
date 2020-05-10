import React from 'react';
// import { FOOTER_NAV_LIST, FOOTER_NAV_INFO, CONTACT_US_NUMBERS } from '../../constants/index';
import iPhoneXR from '../../assets/images/iPhoneXR.jpeg';

import '../../styles/cart/index.scss';

class Cart extends React.Component {
    // handleFooterNavList = ({id, href, text}) => {
    //     return (
    //         <li key={id}>
    //             <a href={href}>
    //                 <span>{text}</span>
    //             </a>
    //         </li>
    //     )
    // }

    render() {
        return (
            <section className="cart-container justify-content-center container">
                <div className="col-md-8 product-container row">
                    <div className="img-wrap">
                        <img src={iPhoneXR} className="img" />
                    </div>
                    <div className="properties-wrap">
                        <div className="product-name">
                            <a href="#">iPhone XR 64GB (Black)</a>
                        </div>
                        <form className="cart-form mt-3">
                            <div className="element-container">
                                <label className="property-name" for="1">Гарантія на дисплей (+$67)</label>
                                <input className="checkbox-element" type="checkbox" id="1" name="1" />
                            </div><br/>
                            <div className="element-container">
                                <label className="property-name" for="2">Налаштування (+$18)</label>
                                <input className="checkbox-element" type="checkbox" id="2" name="2" />
                            </div><br/>
                            <div className="element-container">
                                <label className="property-name" for="3">Додаткова гарантія</label>
                                <input className="checkbox-element" type="checkbox" id="3" name="3" />
                            </div><br/>
                            <div className="element-container">
                                <label className="property-name" className="" for="4">Захисне скло (+$5)</label>
                                <input className="checkbox-element" type="checkbox" id="4" name="4" />
                            </div><br/>
                            <div className="d-flex  justify-content-between">
                                <div className="select-container d-flex">
                                    <div className="amount mr-2">К-сть:</div>
                                    <select>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="price">$669</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 order-container">
                    <div className="total">Всього:</div>
                    <div className="total-price">$669</div>
                    <button className="to-order-btn">Оформити замовлення</button>
                </div>
            </section>
        )
    }
}

export default Cart