import React from 'react';

const Title = ({ordinary, blueText}) => {
    return (
        <div className="section-title">
            <h2>
                {ordinary} <span>{blueText}</span>
            </h2>
        </div>
    );
};

export default Title;