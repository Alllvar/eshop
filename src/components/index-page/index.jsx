import React from 'react';
import { CATEGORIES_CONTENT1 } from '../../constants/index';
import { CATEGORIES_CONTENT2 } from '../../constants/index';
import { PRODUCT_ITEM } from '../../constants/index';
import iPhone2 from '../../assets/images/iPhone2.png';
import './index.scss';

class IndexPage extends React.Component {
    handleItem = ({id, img, text}) => {
        return (
            <div key={id} className="categories-element">
                <div className="categories-img-wrap">
                    <img className="categories-img" src={img} alt="" />
                </div>
                <div className="categories-name">{text}</div>
            </div>
        )
    }

    handleProductItem = ({id, img, href, name, price, btntext}) => {
        return (
            <div key={id} className="product-item-container">
                <div className="product-item">
                    <div className="product-item-img-wrap">
                        <img src={img} className="product-item-img" />
                    </div>
                    <div className="product-item-name">
                        <a href={href}>{name}</a>
                    </div>
                    <div className="product-item-price">{price}</div>
                    <div className="product-item-btn">{btntext}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <section className="homepage-categories-container">
                    <div className="categories-row">
                        {CATEGORIES_CONTENT1.map(this.handleItem)}
                    </div>
                    <div className="categories-row">
                        {CATEGORIES_CONTENT2.map(this.handleItem)}
                    </div>
                </section>
                <section className="homepage-product-container">
                    <div className="product-carousel-container">
                        <div className="product-img-wrap">
                            <img className="product-img" src={ iPhone2 } />
                        </div>
                    </div>
                    <div className="product-items-container">
                        {PRODUCT_ITEM.map(this.handleProductItem)}
                    </div>  
                </section>
            </div>
        )
    }
}

export default IndexPage;