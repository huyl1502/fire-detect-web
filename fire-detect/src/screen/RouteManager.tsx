import Dashboard from "./Dashboard";
import Error from "./Error";

export default class RouteManager {
    static RouteCollection = [
        {
            url: "/dashboard",
            element: <Dashboard />,
        },
        {
            url: "/error",
            element: <Error />,
        }
    ]
}