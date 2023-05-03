import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Header from "../pages/Home/Header/Header";
import Main from "../layouts/Main";
import DetailsLayout from "../layouts/DetailsLayout";
import FoodDetails from "../pages/Shared/FoodDetails/FoodDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
    },
    {
        path: 'foods',
        element: <DetailsLayout></DetailsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoutes><FoodDetails></FoodDetails></PrivetRoutes>,
                loader: ({params}) => fetch(`https://the-eaters-server-robbani572.vercel.app/foods/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;