import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/log-in",
                element: <Login />
            }
        ]
    }
])


export default router;