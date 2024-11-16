import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/news",
        element: <h1>News layout</h1>
    },
    {
        path: "/auth",
        element: <h1>Log In</h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default router;