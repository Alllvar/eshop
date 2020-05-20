import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ProductPage from '../components/product-page';
import IndexPage from '../components/index-page';
import Header from './header/index';
import Footer from './footer/index';
import Cart from './cart/index';
import './app.scss';

// const history = createBrowserHistory();

class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <Header />
                    <div className="page-wrapper">
                        <div className="page">
                            <Route exact path='/' component={IndexPage} />
                            <Route path='/product-page' component={ProductPage} />
                            <Route path='/cart' component={Cart} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    };
}

export default App;
