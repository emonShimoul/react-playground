import { Component } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

class App extends Component {
  state = {
    theme: 'light',
    switchTheme: () => {
      this.setState(({theme}) => {
        if(theme === 'dark'){
          return {
            theme: 'light'
          };
        }
        return {
          theme: 'dark'
        }
      });
    }
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Counter>
            {(counter, incrementCount) => (
              <ClickCounter count={counter} incrementCount={incrementCount} />
            )}
          </Counter>
  
          <ThemeContext.Provider value={this.state}><Section /></ThemeContext.Provider>
        </header>
      </div>
    );
  }
}

export default App;
