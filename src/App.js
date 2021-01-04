import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lost Minds (Travel Blog)
        </h1>
        <p>Locations with indoor dining closed</p>
        <ul>
          <li> New York </li>        
          <li> Puerto Rico </li>
        </ul> 
      </header>
    </div>
  );
}

export default App;
