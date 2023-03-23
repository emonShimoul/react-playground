import './App.css';
import ClockList from './components/ClockList';
import Form from './components/Form';

function App() {
  // const quantities = [1,2,3];
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClockList quantities={quantities} /> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
