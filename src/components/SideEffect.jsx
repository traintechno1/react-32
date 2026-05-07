import { useEffect, useState } from "react";

export default function SideEffect(){


    // When the component gets loaded for the first time only if we want to run some JS.

    let [data, setData] = useState([]);

    let [num, setNum] = useState(1);

    // to solve the above architectural problem react has provided a hook. i.e useEffect();
    useEffect(()=>{
        // this will be called on component inital load
        console.log("initial useEffect called")
        setData(getData()); 
    },[])


    // useEffect(()=>{
    //     // this will be called on component inital load, and on every state change
    //     setData(getData()); 
    // })

    useEffect(()=>{
        console.log("Num variable changed");
    }, [num])

    function incrementNumber(){
        setNum(n=> n + 1);
    }

    function getData(){

        // this function is returning syncronus data i.e. we are getting immediate response,
        // it is not calling any external asynchronous API/ network call
        return [1,2,3,4,5,6];
    }

    return(
        <>
            <h2>Learning React Effect</h2>


            <button onClick={incrementNumber}>increment</button>
            {
                data.map(d=>{
                    return <p key={d}>{d}</p>
                })
            }
        </>
    )
}