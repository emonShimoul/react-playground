import './App.css';
import ClockList from './components/ClockList';

function App() {
  const quantities = [1,2,3];
  return (
    <div className="App">
      <header className="App-header">
        <ClockList quantities={quantities} />
      </header>
    </div>
  );
}

export default App;
