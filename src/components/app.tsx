import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Products from './products';
import Product from './product';
import { ApplicationContainer } from './app.styled';

const App = (): JSX.Element => {
    return (
        <ApplicationContainer className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Products />
                    </Route>
                    <Route path="/:id" render={(props) => <Product { ...props }/>}/>
                </Switch>
            </Router>
        </ApplicationContainer>
    );
};

export default App;
