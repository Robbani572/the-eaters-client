import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Header from "../pages/Home/Header/Header";
import Main from "../layouts/Main";
import DetailsLayout from "../layouts/DetailsLayout";
import FoodDetails from "../pages/Shared/FoodDetails/FoodDetails";

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
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://the-eaters-server-robbani572.vercel.app/foods/${params.id}`)
            }
        ]
    }
])

export default router;