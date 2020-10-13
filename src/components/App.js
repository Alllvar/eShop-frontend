import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Games from './games';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import '../assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div className="body-container">
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Games />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
