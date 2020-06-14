import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ProductPage from './product-page';
import IndexPage from './index-page';
import Header from './header';
import Footer from './footer';
import Cart from './cart';
import '../styles/app/app.scss';

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
