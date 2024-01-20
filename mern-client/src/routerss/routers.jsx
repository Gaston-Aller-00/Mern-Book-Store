import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Singup from "../components/Singup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/faq",
            element:<FAQ/>
        },
        {
            
            path:"/blog",
            element:<Blog/>

        },
        {
            path:"/book/:id",
            element:<SingleBook/>,
            loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
  },
  {
    path:"/admin/dashboard",
    element:<DashboardLayout/>,
    children:[
        {
            path:"/admin/dashboard",
            element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
        },
        {
            path:"/admin/dashboard/manage",
            element:<ManageBooks/>
        },
        {
            path:"/admin/dashboard/edit-books/:id",
            element:<EditBooks/>,
            loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
  },
  {
    path:"sing-up",
    element:<Singup/>
  },{
    path: "login",
    element:<Login/>
  },
  {
    path:"logout",
    element:<Logout/>
  }
]);

export default router;
