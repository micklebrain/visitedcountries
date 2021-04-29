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
import TopNYCResturants from './TopNYCResturants';

const App = () => (
  <div>
    <Router>
        <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/topnycresturants">Top NYC Resturants</Link>
                </li>
                <li>
                  <Link to="/speakeasies">NYC Speakeasies</Link>
                </li>                
                <li>
                  <Link to="/tourguide">Hire tour guide</Link>
                </li>
              </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/speakeasies" component={Speakeasy} />
          <Route exact path="/topnycresturants" component={TopNYCResturants} />          
        </Switch>
    </Router>
  </div>
);

export default App;
