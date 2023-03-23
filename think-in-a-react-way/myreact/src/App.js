import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>

        <Counter>
          {(counter, incrementCount) => (
            <HoverCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
      </header>
    </div>
  );
}

export default App;
