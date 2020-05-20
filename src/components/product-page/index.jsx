import React from 'react';
import { COLOR_ITEM1, COLOR_ITEM2, MEMORY_ITEM, PRODUCT_SERVICES_INFO, PRODUCT_TABS, FEATURES_TABLE } from '../../constants/index';
import '../../styles/product-page/index.scss';

class ProductPage extends React.Component {
    handleColorItem = ({id, color, text}) => {
        return (
            <div key={id} className="color-item-wrap mx-2 d-flex flex-row">
                <div className="color" style={color}></div>
                <span className="color-name mt-1 ml-2">{text}</span>
            </div>
        )
    }

    handleMemoryItem = ({id, text}) => {
        return (
            <div key={id} className="memory-item px-2 d-flex align-items-center">{text}</div>
        )
    }

    handleProductServicesInfo = ({id, title, info}) => {
        return (
            <div key={id} className="col-lg-6 col-sm-6">
                <div className="product-services-info-wrap align-items-center d-flex flex-column ">
                    <div className="product-services-info-title">{title}</div>
                    <div className="product-services-info">{info}</div>
                </div>
            </div>        
        )
    }

    handleProductTabs = ({id, href, text}) => {
        return (
            <li key={id} className="product-tab">
                <a className="d-flex align-items-center px-3 mx-4" href={href}>{text}</a>
            </li>    
        )
    }

    handleFeatureElements = ({id, name, value}) => {
        return (
            <tr key={id} className="features-row">
                <td className="feature-name pl-5">{name}</td>
                <td className="feature-value d-flex justify-content-center">{value}</td>
            </tr>
        )
    }

    render() {
        return (
            <section className="product-section d-flex flex-column">
                <div className="top-container py-4 d-flex flex-row">
                    <ul className="top-container-navigation ml-5 mb-0 d-flex flex-row">
                        <li className="top-container-navigation-element mx-2">
                            <a className="top-container-navigation-element-link" href="#">
                                Головна
                            </a>
                        </li>
                        <li className="top-container-navigation-element mx-2">
                            <a className="top-container-navigation-element-link" href="#">
                                iPhone
                            </a>
                        </li>
                        <li className="top-container-navigation-element mx-2">
                            <a className="top-container-navigation-element-link" href="#">
                                iPhone 11
                            </a>
                        </li>
                        <li className="top-container-navigation-element mx-2">
                            <span className="product-name">Apple iPhone 11 64GB (PRODUCT) RED</span>
                        </li>
                    </ul>
                </div>
                <div className="product-section-container d-flex flex-row justify-content-center">
                    <div className="product-section-left-container d-flex justify-content-center">
                        <div className="product-image-wrap">
                            <div className="product-image"></div>
                        </div>
                    </div>
                    <div className="product-section-right-container d-flex flex-column">
                        <div className="product-name-title">
                            Apple iPhone 11 64GB White
                        </div>
                        <div className="color-container mt-5 d-flex flex-row">
                            <div className="color-title mt-2">Колір:</div>
                            <div className="colors-section-wrap d-flex flex-row">
                                <div className="color-items-wrap d-flex">
                                    {COLOR_ITEM1.map(this.handleColorItem)}
                                </div>
                                <div className="color-items-wrap d-flex">
                                    {COLOR_ITEM2.map(this.handleColorItem)}
                                </div>
                            </div>
                        </div>
                        <div className="memory-container mt-5 ml-3 d-flex flex-row">
                            <div className="memory-title">Пам’ять:</div>
                            <div className="memory-items-wrap d-flex flex-row">
                                {MEMORY_ITEM.map(this.handleMemoryItem)}
                            </div>
                        </div>
                        <div className="product-price-container mt-5 d-flex flex-column">
                            <div className="product-price-ua pl-4">
                                24 612
                                <span>грн</span>
                            </div>
                            <div className="product-price-us pl-4 mt-1">
                                $879
                            </div>
                        </div>
                        <div className="product-services-header-wrap my-5 position-relative">
                            <span className="product-services-header py-2 px-4 position-absolute">Додатково</span>
                        </div>
                        <div className="row product-services-container d-flex">
                            {PRODUCT_SERVICES_INFO.map(this.handleProductServicesInfo)}
                        </div>
                        <div className="product-card-two-btn mt-5 row">
                            <div className="col-lg-6 col-md-6 col-xs-6 d-flex justify-content-center">
                                <button className="button buy-button">Купити</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-6 d-flex justify-content-center">
                                <button className="button credit-button">Онлайн розстрочка під 0%</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tabs-container mt-3 d-flex align-self-center flex-column align-items-center">
                    <ul className="product-tabs-list d-flex flex-row">
                        {PRODUCT_TABS.map(this.handleProductTabs)}
                    </ul>
                    <h4 className="product-tabs-title mt-5">Характеристики</h4>
                    <table className="features my-4 mx-auto mw-100">
                        <tbody className="features-table">
                            {FEATURES_TABLE.map(this.handleFeatureElements)}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default ProductPage;