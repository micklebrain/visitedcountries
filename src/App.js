import './App.css';
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  render() {   
    return (
    <div>
      <Router>
          <nav id='navbar'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>                  
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>          
      </Router>      
    </div>)
  }
}

export default App;
