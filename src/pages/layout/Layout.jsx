import { NavLink, Outlet } from "react-router-dom";
import "../layout/Layout.css";

export default function Layout(){
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
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </>
    )
}