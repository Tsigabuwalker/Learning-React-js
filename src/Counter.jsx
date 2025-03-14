import React, { useState } from 'react';

function Counter() {
    const [c, setCounter] = useState(0);

    const increment = () => {
        setCounter(c => c + 1); 
        setCounter(c => c + 1);
        setCounter(c => c + 1);// Use functional update
    };

    const decrement = () => {
        setCounter(c => c - 1); 
        setCounter(c => c - 1);
        setCounter(c => c - 1);// Use functional update
    };

    const reset = () => {
        setCounter(c => c = 0);
    };

    return (
        <div className="counter-container">
            <h1 className="count-display">Counter: {c}</h1>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;