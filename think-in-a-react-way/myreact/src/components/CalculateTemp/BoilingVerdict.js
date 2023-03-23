import React from 'react';

const BoilingVerdict = ({celsius}) => {
    return (
        <div>
            {celsius>=100 ? "Water would boil." : "Water would not boil."}
        </div>
    );
};

export default BoilingVerdict;