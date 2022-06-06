import React, { useState } from 'react';
import quotes from "../quotes.json";
import QuoteButton from './QuoteButton';

const colors = ["red", "lightblue", "yellow", "orange", "green", "gold", "pink"]

const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const [ index, setIndex ]  = useState(randomIndex)

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background : ${colors[randomColor]}`

    return (
        <div className='QuoteContainer'>
            <i className="fa-solid fa-quote-left quote-mark" style={{color: colors[randomColor]}}></i>
            <p className="quote-text" style={{color: colors[randomColor]}}> {quotes[index].quote} <br /></p>
            <p className='author-text' style={{color: colors[randomColor]}}> {quotes[index].author} </p> 
            <QuoteButton changeQuote={changeQuote} randomColor={randomColor} colors={colors} /> 
        </div>
    );
};

export default QuoteBox;