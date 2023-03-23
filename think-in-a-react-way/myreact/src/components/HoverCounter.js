import React from 'react';

const HoverCounter = ({count, incrementCount, theme}) => {
    const style = theme === 'light' ? {backgroundColor: '#ffffff', color: '#000000', padding: '10px 20px'} : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
    );
};

export default HoverCounter;