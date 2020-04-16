import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import  ProductPage from '../components/product-page';
import Header from './header/index';
import Footer from './footer/index';


class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <Header />
                    <div className="page-wrapper">
                            <div className="page">
                                <Route path='/product-page' component={ProductPage} />
                            </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    };
}

export default App;
