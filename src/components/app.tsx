import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Products from './products';
import Product from './product';

const App = (): JSX.Element => {
    return (
        <div className="app">
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Products />
                    </Route>
                    <Route path="/:id" render={(props) => <Product { ...props }/>}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
