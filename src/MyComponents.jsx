import React, { useState } from 'react';

function MyComponent() {
    // useState has a stateful variable and a function to update it
    const [name, setName] = useState("");

    const updateName = () => {
        setName("Tsigabu"); // Use setName to update the state
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    );
}

export default MyComponent; // Export the component without parentheses