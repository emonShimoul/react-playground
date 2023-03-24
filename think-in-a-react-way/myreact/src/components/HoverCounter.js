import React from 'react';

const HoverCounter = ({count, incrementCount, theme, switchTheme}) => {
    const style = theme === 'light' ? {backgroundColor: '#ffffff', color: '#000000', padding: '0 10px'} : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>

            <button type='button' onClick={switchTheme}>Change Theme</button>
        </div>
    );
};

export default HoverCounter;