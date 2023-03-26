import './App.css';
import React, { useCallback, useMemo, useState } from 'react';
import Title from './components/Title';
import Showcount from './components/Showcount';
import Button from './components/Button';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while(i<2000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }, [count1]);
 
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Showcount count={count1} />
        <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
        <Button handleClick={incrementByOne}>Increment by one</Button>
        {/* <hr /> */}
        <Showcount count={count2} />
        <Button handleClick={incrementByFive}>Increment by five</Button>
      </header>
    </div>
  );
}

export default App;
