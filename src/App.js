import './App.css';
import React from 'react';
import Home from './Home';
import Speakeasy from './Speakeasy'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <div>
    <Router>
        <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/speakeasies">Speakeasies</Link>
                </li>
              </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/speakeasies" component={Speakeasy} />          
        </Switch>
    </Router>
  </div>
);

export default App;
