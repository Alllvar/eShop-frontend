import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Products from './products';
import Product from './product';
import Login from './login';
import { ApplicationContainer } from './app.styled';

const App = (): JSX.Element => (
  <ApplicationContainer className="app">
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Products} />
        <Route path="/:id" render={(props) => <Product {...props} />} />
      </Switch>
    </Router>
  </ApplicationContainer>
);

export default App;
