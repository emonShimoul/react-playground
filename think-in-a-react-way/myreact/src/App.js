import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  // const quantities = [1,2,3];
  return (
    <div className="App">
      <header className="App-header">
        <Counter 
          render={(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )} 
        />

        <Counter 
          render={(counter, incrementCount) => (
            <HoverCounter count={counter} incrementCount={incrementCount} />
          )} 
        />
      </header>
    </div>
  );
}

export default App;
