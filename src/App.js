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
              <li>
                <Link to="/ticketMarketplace">Ticket Marketplace</Link>
              </li>                      
              {/* 
              bars
              nightclubs 
              general attractions 
              tour guide
              festivals
              hotels
              speakeasies
              */}
            </ul>
          </nav>
          <div style = { {
            width: '100%',
            maxWidth: 360,
            } }>
            <List component="nav" aria-label="secondary mailbox folders" >
              Cities
              <ListItem button>
                <Link to="/denver">Denver</Link>      
              </ListItem>
              <ListItem button>
                <Link to="/newyorkcity">New York City</Link>       
              </ListItem>              
              {/* <ListItemLink href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemLink> */}
            </List>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/speakeasies" component={Speakeasy} />
            <Route exact path="/denver" component={Denver} />
            <Route exact path="/newyorkcity" component={NewYorkCity} />                        
            <Route exact path="/topvegasresturants" component={TopVegasResturants} />
            <Route exact path="/hotels" component={Hotels} />   
            <Route exact path="/ticketMarketplace" component={TicketMarketplace} />

            <Route exact path="/article" component={Article} />
          </Switch>          
      </Router>      
    </div>)
  }
}

export default App;
