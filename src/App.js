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
        <img src="http://chart.apis.google.com/chart?cht=map:fixed=-70,-180,80,180&chs=450x300&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:99999999999&chld=CA|CN|CO|FR|GB|JP|MY|SG|TH|US|VN" width="450" height="300" ></img><br />visited 11 states (4.88%)<br />
        <img src="http://chart.apis.google.com/chart?cht=map:fixed=40,-150,75,-50&chs=455x330&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:9&chld=CA-ON" width="455" height="330" ></img><br />visited 1 states (7.69%)<br />
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
