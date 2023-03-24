import React, { useContext } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../contexts/themeContext';

const Content = () => {
    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
            {(counter, incrementCount) => (
                    <HoverCounter 
                        count={counter} 
                        incrementCount={incrementCount}
                        theme={theme} switchTheme={switchTheme} 
                    />
                )}
            </Counter>
        </div>
    );
};

export default Content;


// get context value using render prop pattern. can be used in both class and functional component
/*
...
<div>
    <h1>This is a content</h1>
    <Counter>
    {(counter, incrementCount) => {
        return <ThemeContext.Consumer>
            { ({theme, switchTheme}) =>
            <HoverCounter 
                count={counter} 
                incrementCount={incrementCount}
                theme={theme} switchTheme={switchTheme} 
            />
        }</ThemeContext.Consumer>
    }}
    </Counter>
</div>
...
*/


// In class component the context value can be found in another way.
/* 
Content.contextType = ThemeContext;
componentDidMount(){
    console.log(this.context);
}
*/