import logo from './logo.svg';
import './App.css';

import TestingDom from './components/testing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TestingDom></TestingDom>
      </header>
    </div>
  );
}

export default App;
