
export default function Child({age, getDataFromChild,email,isContractor, mobileNumbers, address, first_name, last_name}){
    
    const sendData = ()=>{
        getDataFromChild({
            age,
            first_name,
            mobileNumbers,
            address
        });
    }

    return(
        <>
            <h3>Child component</h3>
            <p>First Name: {first_name}</p>
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