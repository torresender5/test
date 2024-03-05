import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/home";
import ErrorPage from "../views/error_page/Error_view";
import Create from "../views/evaluation/Create";

type Routes = {
    path: string,
    element: React.ReactNode,
    errorElement?: React.ReactNode,
    children?: Array<Object>

}

const routes: Routes = {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "home",
            element: <Home/>,
        },
        {
            path: "create-evaluation",
            element: <Create />
        }

    ]
} 


const router = createBrowserRouter([
    routes]);
  export default router;