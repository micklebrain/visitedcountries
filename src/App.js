import './App.css';
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbarmenu from './Navbarmenu';


class App extends React.Component {
  render() {   
    return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">              
            </Route>
          </Switch>          
      </Router>      
    </div>)
  }
}

export default App;
