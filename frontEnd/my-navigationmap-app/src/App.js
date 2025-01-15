import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="NavMap">
      <h1>Hi!, Welcome</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          we are nav <code></code> and we locate you smoothly.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thanks for visiting us
        </a>
      </header>
    </div>
  );
}

export default App;
