import { useState } from "react";

export default function Users(){

    const [users, setUsers] = useState([
        {
            id: 100001,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@gmail.com"
        },
        {
            id: 100002,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@gmail.com"
        },
        {
            id: 100003,
            name: "Chetan Kharche",
            email: "chetan.kharche@gmail.com"
        }
    ])

    const [userEmail, setUserEmail] = useState("");
    const [userId, setUser] = useState("");


    function changeEmail(){
        setUsers(users.map(u =>u.id == userId ? 
            {...u, email: userEmail}: u
        ))
    }

    function changeUserId(event){
        setUser(event.target.value);
    }
    function changeUserEmail(event){
        setUserEmail(event.target.value);
    }

    return(
        <>
            <h2>Users component</h2>

            <label>User Id:</label>
            <input name="id" value={userId} onChange={changeUserId} />
            <br />
            <label>New Email:</label>
            <input name="email" value={userEmail} onChange={changeUserEmail} />

            <br />
            {/* <h1>userId: {userId}, userEmail: {userEmail}</h1> */}

            <button onClick={changeEmail}>change email</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>{
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <ul>    
                {
                    users.map(u=> <li key={u.id}>
                            {u.name} -- {u.email} 
                        </li>
                    )
                }
            </ul>
        </>
    )
}