import React from 'react';

const Showcount = ({count}) => {
    console.log(`rendering count ${count}`);
    return (
        <div>
            <p>Increment by {count}</p>
        </div>
    );
};

export default React.memo(Showcount);