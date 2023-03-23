import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../contexts/themeContext';

const Content = () => {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
            {(counter, incrementCount) => {
                return <ThemeContext.Consumer>{ ({theme}) =>
                    <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />
                }</ThemeContext.Consumer>
            }}
            </Counter>
        </div>
    );
};

export default Content;