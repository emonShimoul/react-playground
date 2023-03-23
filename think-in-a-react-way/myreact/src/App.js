import './App.css';
// import Calculator from './components/CalculateTemp/Calculator';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Bracket from './components/composition/Bracket';

function App() {
  // const quantities = [1,2,3];
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClockList quantities={quantities} /> */}
        {/* <Form /> */}
        {/* <Calculator /> */}

        <Text />

        {/* use of composition in react */}
        <Emoji>
          {({addEmoji})=> <Text addEmoji={addEmoji}/>}
        </Emoji>

        {/* use of composition in multiple and nested component  */}
        <Emoji>
          {({addEmoji})=> (
            <Bracket>
              {({addBracket})=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
            </Bracket>
          )}
        </Emoji>

      </header>
    </div>
  );
}

export default App;
