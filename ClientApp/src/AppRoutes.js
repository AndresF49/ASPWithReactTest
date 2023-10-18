import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Account/Login"

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetchdata',
        element: <FetchData />
    },
    {
        path: '/login',
        element: <Login />
    }
];

export default AppRoutes;
