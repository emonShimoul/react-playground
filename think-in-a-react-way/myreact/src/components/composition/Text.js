import React from 'react';

const text = ({addEmoji, addBracket}) => {
    let text = 'I am JS Programming Language !!';
    if(addEmoji){
        text = addEmoji(text, " EMOJI ");
    }
    if(addBracket){
        text = addBracket(text);
    }
    return (
        <div>
            {text}
        </div>
    );
};

export default text;