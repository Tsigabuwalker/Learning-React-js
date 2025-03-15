import React, { useState } from 'react';

function Car1() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

    }
        

    function handleRemoveCar(index) {
        
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List Of Car Objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={carYear}
                onChange={handleYearChange}
                
            />
            <br/>
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Car Make"
            />
            <br/>

            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Car Model"
            />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default Car1;