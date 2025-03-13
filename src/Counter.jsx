import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 5); // Use functional update
    };

    const decrement = () => {
        setCounter(prevCounter => prevCounter - 5); // Use functional update
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <div className="counter-container">
            <h1 className="count-display">Counter: {counter}</h1>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;