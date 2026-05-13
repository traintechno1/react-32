import { NavLink, Outlet } from "react-router-dom";
import "../about/About.css";
export default function About(){
    return(
        <>
            <h2>Anout Page</h2>
            <ul>
                <li>
                    <NavLink to="us">About us</NavLink>    
                </li>
                <li>
                    <NavLink to="products">About Products</NavLink>    
                </li>
                <li>
                    <NavLink to="customers">About Customers</NavLink>    
                </li>
            </ul>

            <div className="sub-routes">
                <Outlet></Outlet>
            </div>
        </>
    )
}