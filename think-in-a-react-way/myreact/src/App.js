import './App.css';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Bracket from './components/composition/Bracket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
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
