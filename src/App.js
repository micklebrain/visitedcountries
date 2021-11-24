import './App.css';
import React from 'react';
import Home from './Home';
import Hotels from './Hotels';
import Speakeasy from './Speakeasy'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Denver from './cities/Denver';
import NewYorkCity from './cities/NewYorkCity';
import TopVegasResturants from './TopVegasResturants';
import TicketMarketplace from './TicketMarketplace';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NewYorkCityArticle from './NYCArticles/NewYorkCityArticle';
import NewYorkCityArticle2 from './NYCArticles/NewYorkCityArticle2';
import NewYorkCityArticle3 from './NYCArticles/NewYorkCityArticle3';
import NewYorkCityArticle4 from './NYCArticles/NewYorkCityArticle4';
import Article from './Article'

class App extends React.Component {
  
  // ListItemLink(props) {
  //   return <ListItem button component="a" {...props} />;
  // } 

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
