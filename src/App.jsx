import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const {state, dispatch, ACTIONS} = useApplicationData();

  const {
    event,
    user,
    day,
    energy,
    pets, 
    } = state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Event: {event}</p> <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: event + 1})}>Click Me</button>
        <p>User: {user}</p>
        <p>Day: {day}</p>
        <p>Energy: {energy}</p>
        <button onClick={() => dispatch({type: ACTIONS.SLEEP})}>Sleep</button>
        <p>Pet name: {pets[0].name} Mood: {pets[0].mood}</p>
        <button onClick={()=> dispatch({type: ACTIONS.PERFORM_ACTION, value: pets[0].mood + 3})}>Feed</button>
      </header>
    </div>
  );
}

export default App;
