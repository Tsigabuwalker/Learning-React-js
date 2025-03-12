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
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;