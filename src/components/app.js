import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './header';
import Navigation from './navigation';
import ProductsContainer from './products-container';
import Product from "./product";
import '../styles/app.scss';


function App() {
    return (
        <div className="app container-fluid">
            <Header/>
            <Navigation/>
            <div className="body-container">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <ProductsContainer />
                        </Route>
                        <Route path="/product/:id">
                            <Product />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
