import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Products from './products';
import Product from './product';
import '../styles/index.scss';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Products />
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
