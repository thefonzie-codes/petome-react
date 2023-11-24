import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const {state, setState} = useApplicationData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Event: {state.event}</h1>
       <button onClick={() => dispatch({event: state.event + 1})}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
