import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../layout/Layout.css";

export default function Layout(){

    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem("jwt_token");
        navigate("/login")
    }
    return(
        <>
            <div>
                <ul>
                    <li className="nav-item">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/employee">Employees</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/transact">Transact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <button onClick={logout}>logout</button>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </>
    )
}