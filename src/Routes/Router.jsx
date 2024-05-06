
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [


            {
                path: "/",
                element : <Home></Home>

            },
            {
                path: "/login",
                element : <LogIn></LogIn>

            },
            {
                path: "/register",
                element : <SignUp></SignUp>

            },
            {
                path: "/serviceDetails",
                element : <ServiceDetails></ServiceDetails>

            },
            {
                path: "/checkOut/:id",
                element : <CheckOut></CheckOut>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path:"/cartDetails",
                element : <PrivateRoute><CartDetails></CartDetails></PrivateRoute>
            },

        ]
    },
]);
export default router;