import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
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