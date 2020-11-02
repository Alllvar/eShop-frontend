import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './header';
import Navigation from './navigation';
import ProductsContainer from './products-container';
import '../styles/app.scss';

function App() {
    return (
        <div className="app">
            <Router>
                <div>
                    <Header/>
                    <div className="body-container">
                        <Navigation/>
                        <Switch>
                            <Route exact path="/">
                                <ProductsContainer/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
