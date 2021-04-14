import logo from './logo.svg';

function Home() {
    return (
      <div className="App">      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <h1>
            Lost Minds (Travel Blog)
          </h1>
          <h2> Indoor dining status </h2> 
          <h2> United States </h2>
          <h3>Confirmed locations with partial indoor dining open </h3>
          <ul>
            <li> New York last updated - 4/12/21 </li>
          </ul>
          <h3>Confirmed locations with complete indoor dining open </h3>
          <ul>          
            <li> New Jersey last updated - 4/12/21 </li>
            <li> Georgia last updated - 4/12/21 </li>
          </ul>
          <h2> Outside the United States </h2>
          <h3>Confirmed locations with indoor dining closed</h3>
          <ul>          
            <li> Puerto Rico last updated - 1/3/21 </li>
          </ul>
        </body>
      </div>
    );
  }
  
  export default Home;