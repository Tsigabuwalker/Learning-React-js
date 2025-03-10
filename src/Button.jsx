import React from 'react';

function Button() {
let count = 0;

const btn2 = (name) => {
    if(count < 3){
        count++;
        console.log(` ${name} Button Clicked ${count} times. Hello`);
    }
    else{
        console.log("Button has reached its maximum limit. Clicking is disabled.");
    }
}
    

    return (
        <button onClick={() => btn2("Tsigabu")} className="button">
            Click Me 😄
        </button>
    );
}

export default Button;