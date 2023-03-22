import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock locale="bn-BD"/>
        <Clock locale="en-US"/>
      </header>
    </div>
  );
}

export default App;
