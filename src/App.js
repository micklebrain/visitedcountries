import './App.css';
import React from 'react';
import Home from './Home';
import Hotels from './Hotels';
import Speakeasy from './Speakeasy'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopNYCResturants from './TopNYCResturants';
import TopVegasResturants from './TopVegasResturants';
import TicketMarketplace from './TicketMarketplace';

const App = () => (
  <div>
    <Router>
        <nav id='navbar'>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/topnycresturants">Top NYC Resturants</Link>
                </li>
                {/* <li>
                  <Link to="/topvegasresturants">Top Las Vegas Resturants</Link>
                </li> */}
                {/* <li>
                  <Link to="/speakeasies">NYC Speakeasies</Link>
                </li>
                <li>
                  <Link to="/hotels">Hotels</Link>
                </li>     */}
                <li>
                  <Link to="/ticketMarketplace">Ticket Marketplace</Link>
                </li>                        
                {/* <li>
                  <Link to="/festivals">Festivals</Link>
                </li>             */}
                {/* <li>
                  <Link to="/tourguide">Hire tour guide</Link>
                </li> */}
                {/* bars
                nightclubs 
                general attractions */}
              </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/speakeasies" component={Speakeasy} />
          <Route exact path="/topnycresturants" component={TopNYCResturants} />
          <Route exact path="/topvegasresturants" component={TopVegasResturants} />
          <Route exact path="/hotels" component={Hotels} />   
          <Route exact path="/ticketMarketplace" component={TicketMarketplace} />         
          {/* <Route exact path="/festivals" component={Festivals} />         */}
        </Switch>
    </Router>
  </div>
);

export default App;
