import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Data from Express:</h1>
          {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
