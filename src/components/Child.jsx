
export default function Child({age, getDataFromChild,email,isContractor, mobileNumbers, address, firstName, last_name}){
    const sendData = ()=>{
        getDataFromChild({
            a: 100,
            b: 200
        });
    }

    return(
        <>
            <h3>Child component</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {last_name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Employee Type: {isContractor ? "Contactual": "Company Payrole"}</p>
            <p>Address: {address.city}, {address.country}. {address.pinCode}</p>
            <p>Address: {mobileNumbers.map(m=><span key={m}>{m} ,</span>)}</p>

            <button onClick={sendData}>Send Data</button>
        </>
    )
}