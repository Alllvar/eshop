import React from 'react';
import { CATEGORIES_CONTENT, PRODUCT_ITEM } from '../../constants/index';
import iPhone2 from '../../assets/images/iPhone2.png';
import '../../styles/index-page/index.scss';

class IndexPage extends React.Component {
    handleItem = ({id, img, text}) => {
        return (
            <div key={id} className="categories-element d-flex flex-row align-items-center">
                <div className="img-wrap">
                    <img className="img" src={img} alt="iPhone" />
                </div>
                <div className="name d-block">{text}</div>
            </div>
        )
    }

    handleProductItem = ({id, img, href, name, price, btntext}) => {
        return (
            <div key={id} className="product-item-container w-50">
                <div className="product-item d-flex flex-column justufy-content-center align-items-center">
                    <div className="img-wrap">
                        <img src={img} className="img" alt="product" />
                    </div>
                    <div className="name">
                        <a href={href}>{name}</a>
                    </div>
                    <div className="price">{price}</div>
                    <div className="btn">{btntext}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <section className="homepage-categories-container d-flex align-items-center">
                    <div className="categories-row d-flex flex-wrap justify-content-center">
                        {CATEGORIES_CONTENT.map(this.handleItem)}
                    </div>
                </section>
                <section className="homepage-product-container d-flex w-90 h-100">
                    <div className="product-carousel-container w-50">
                        <div className="product-img-wrap">
                            <img className="img" src={ iPhone2 } alt="product" />
                        </div>
                    </div>
                    <div className="product-items-container d-flex flex-wrap w-50">
                        {PRODUCT_ITEM.map(this.handleProductItem)}
                    </div>  
                </section>
            </div>
        )
    }
}

export default IndexPage;