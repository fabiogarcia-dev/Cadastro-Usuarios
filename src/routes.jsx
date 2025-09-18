import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Index'
import ListUsers from './pages/ListUsers/index'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }

])

export default router