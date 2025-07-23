import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Srikanth <code>src/App.js</code> Welcome to the new project. 
{/* //*gdgdhtttttttttttttttttttttttttttttttttty */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org" 
          /* this is the new code  */
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
