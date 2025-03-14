import React, {useState} from 'react';

function Obj(){
    const [car, setCar] = useState({
        year:2024,
        model: "ford",
        make:"mustag",

    });

    function hadleYearChange(event){
        setCar({year: 2025});

    }
    function handleModelChange(event){
        setCar({model: "Tesla"});
    }
    function handleMakesChange(event){
        setCar({make: "xxxx"});
    }
    return(
        <div>
          <input type="number" value={year.car} onChange={handleYearChange}></input> <br></br>
          <input type="text" value={year.make} onChange={handleMakesChange}></input><br></br>
          <input type="text" value={year.model} onChange={handleModelChange}></input>


        </div>
    )
    
}


