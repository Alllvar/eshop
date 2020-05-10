import React from 'react';
import { COLOR_ITEM1, COLOR_ITEM2, MEMORY_ITEM, PRODUCT_SERVICES_INFO, PRODUCT_TABS, FEATURES_TABLE } from '../../constants/index';
import '../../styles/product-page/index.scss';

class ProductPage extends React.Component {
    handleColorItem = ({id, color, text}) => {
        return (
            <div key={id} className="color-item-wrap">
                <div className="color" style={color}></div>
                <span className="color-name">{text}</span>
            </div>
        )
    }

    handleMemoryItem = ({id, text}) => {
        return (
            <div key={id} className="memory-item">{text}</div>
        )
    }

    handleProductServicesInfo = ({id, title, info}) => {
        return (
            <div key={id} className="col-lg-6 col-sm-6">
                <div className="product-services-info-wrap">
                    <div className="product-services-info-title">{title}</div>
                    <div className="product-services-info">{info}</div>
                </div>
            </div>        
        )
    }

    handleProductTabs = ({id, href, text}) => {
        return (
            <li key={id} className="product-tab">
                <a href={href}>{text}</a>
            </li>    
        )
    }

    handleFeatureElements = ({id, name, value}) => {
        return (
            <tr key={id} className="features-row">
                <td className="feature-name">{name}</td>
                <td className="feature-value">{value}</td>
            </tr>
        )
    }

    render() {
        return (
            <section className="product-section">
        <div className="top-container">
            <ul className="top-container-navigation">
                <li className="top-container-navigation-element">
                    <a className="top-container-navigation-element-link" href="#">
                        Головна
                    </a>
                </li>
                <li className="top-container-navigation-element">
                    <a className="top-container-navigation-element-link" href="#">
                        iPhone
                    </a>
                </li>
                <li className="top-container-navigation-element">
                    <a className="top-container-navigation-element-link" href="#">
                        iPhone 11
                    </a>
                </li>
                <li className="top-container-navigation-element">
                    <span className="product-name">Apple iPhone 11 64GB (PRODUCT) RED</span>
                </li>
            </ul>
        </div>
        <div className="product-section-container">
            <div className="product-section-left-container">
                <div className="product-image-wrap">
                    <div className="product-image"></div>
                </div>
            </div>
            <div className="product-section-right-container">
                <div className="product-name-title">
                    Apple iPhone 11 64GB White
                </div>
                <div className="color-container">
                    <div className="color-title">Колір:</div>
                    <div className="colors-section-wrap">
                        <div className="color-items-wrap">
                            {COLOR_ITEM1.map(this.handleColorItem)}
                        </div>
                        <div className="color-items-wrap">
                            {COLOR_ITEM2.map(this.handleColorItem)}
                        </div>
                    </div>
                </div>
                <div className="memory-container">
                    <div className="memory-title">Пам’ять:</div>
                    <div className="memory-items-wrap">
                        {MEMORY_ITEM.map(this.handleMemoryItem)}
                    </div>
                </div>
                <div className="product-price-container">
                    <div className="product-price-ua">
                        24 612
                        <span>грн</span>
                    </div>
                    <div className="product-price-us">
                        $879
                    </div>
                </div>
                <div className="product-services-header-wrap">
                    <span className="product-services-header">Додатково</span>
                </div>
                <div className="row product-services-container">
                    {PRODUCT_SERVICES_INFO.map(this.handleProductServicesInfo)}
                </div>
                <div className="product-card-two-btn row">
                    <div className="col-lg-6 col-md-6 col-xs-6 d-flex justify-content-center">
                        <button className="button buy-button">Купити</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-6 d-flex justify-content-center">
                        <button className="button credit-button">Онлайн розстрочка під 0%</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-tabs-container">
            <ul className="product-tabs-list">
                {PRODUCT_TABS.map(this.handleProductTabs)}
            </ul>
            <h4 className="product-tabs-title">Характеристики</h4>
            <table className="features">
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