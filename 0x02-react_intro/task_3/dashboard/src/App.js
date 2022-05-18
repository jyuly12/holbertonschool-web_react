import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <hr/>
      <body className='App-body'>
        <p>
          Login to access the full dashboard
        </p>
        <label>Email:<input/></label>
        <label>Password:<input/></label>
        <button>OK</button>
      </body>
      <hr/>
      <footer className='App-footer'>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </footer>
    </div>
  );
}

export default App;
