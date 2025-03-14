import React, { useState } from 'react';

function Obj() {
    const [car, setCar] = useState({
        year: 2024,
        model: "Ford",
        make: "Mustang",
    });

    function handleYearChange(event) {
        setCar(prevCar => ({ ...prevCar, year: event.target.value }));
    }

    function handleModelChange(event) {
        setCar(prevCar => ({ ...prevCar, model: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({ ...prevCar, make: event.target.value }));
    }

    return (
        <div>
            <input 
                type="number" 
                value={car.year} 
                onChange={handleYearChange} 
            /><br />
            <input 
                type="text" 
                value={car.make} 
                onChange={handleMakeChange} 
            /><br />
            <input 
                type="text" 
                value={car.model} 
                onChange={handleModelChange} 
            />
        </div>
    );
}

export default Obj;