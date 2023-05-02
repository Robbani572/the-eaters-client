import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Header from "../pages/Home/Header/Header";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default router;