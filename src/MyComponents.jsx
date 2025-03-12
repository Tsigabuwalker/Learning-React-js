import React, { useState } from 'react';

function MyComponent() {
    // useState has a stateful variable and a function to update it
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Hagos"); // Use setName to update the state
    };
    const updateAge = () => {
        setAge(age + 2); // Use setAge to update the state
        
    };
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed); // Use setIsEmployed to update the state
    }
    // The stateful variable and their respective update functions are accessible within the component's body

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Is employed: {isEmployed ? "Yes" : "NO"}</p>
            <button onClick={toggleEmployedStatus}>toggle Status</button>
        </div>

    );
}

export default MyComponent; // Export the component without parentheses