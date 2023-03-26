import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentClass from './components/MyComponentClass';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div>{show && <MyComponent />}</div>
        <p>
          <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
            {show ? 'Hide Post' : 'Show Post'}
          </button>
        </p>
        {/* <MyComponentClass /> */}
        {/* <MyComponent/> */}
        
      </header>
    </div>
  );
}

export default App;
