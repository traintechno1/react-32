import { useState } from "react";


export function Counter(){
    
    let [count, setCount] = useState(0);
    let [toggle, setToggle] = useState(true);

    function incrementValue(){
        setCount((x)=> x + 1);
        // console.log(count);
    }

    function decrementValue(){
        setCount(count => count - 1);
        // console.log(count);
    }

    function toggleValue(){
        setToggle(v=> !v);
    }

    return(
        <>
            <h2>Counter</h2>

            <button onClick={incrementValue}>+</button> 
                <h2>{count}</h2>
            <button onClick={decrementValue}>-</button>

            <br></br>

            <button onClick={toggleValue}>Toggle value</button>
            <h2>{toggle ? "ON" : "OFF"}</h2>
            {/* <h2>{toggle ? "true": "false"}</h2> */}
        </>
    )
}