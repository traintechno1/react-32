import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Employees from "../components/Employees";
import About from "../pages/about/About";
import AboutUs from "../pages/about/AboutUs";
import AboutProduct from "../pages/about/AboutProduct";
import AboutCustomer from "../pages/about/AboutCustomer";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Transact from "../pages/transact/Transact";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'employee',
                element: <Employees/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'about',
                element: <About/>,
                children:[
                    {
                        index: true,
                        element: <AboutUs/>
                    },
                    {
                        path: "us",
                        element: <AboutUs />
                    },
                    {
                        path: "products",
                        element: <AboutProduct />
                    },
                    {
                        path: "customers",
                        element: <AboutCustomer />
                    }
                ]
            },
            {
                // path: 'transact',
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: 'transact',
                        element: <Transact/>
                    }
                ]
            }
        ]
    }
])