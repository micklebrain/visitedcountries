import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
