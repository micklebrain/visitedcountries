import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>
          Lost Minds (Travel Blog)
        </h1>
        <h2>Confirmed locations with indoor dining closed</h2>
        <ul>          
          <li> Puerto Rico last updated - 1/3/21 </li>
        </ul>
        <h2>Confirmed locations with partial indoor dining open </h2>
        <ul>
          <li> New York last updated - 4/12/21 </li>
        </ul>
        <h2>Confirmed locations with complete indoor dining open </h2>
        <ul>          
          <li> New Jersey last updated - 4/12/21 </li>
          <li> Georgia last updated - 4/12/21 </li>
        </ul>
      </body>
    </div>
  );
}

export default App;
