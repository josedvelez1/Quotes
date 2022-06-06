import React from 'react';


const QuoteButton = ({changeQuote, randomColor, colors}) => {


    return (
        <div className='button-container'>
            <button className='button-box' onClick={changeQuote} style={{background: colors[randomColor]}}>
                <i className="fa-solid fa-angle-right "></i>
            </button>
        </div>
    );
};

export default QuoteButton;