import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Singlebook from "../shop/Singlebook";
import Dashboardlayout from "../dashboard/Dashboardlayout";
import Dashboard from "../dashboard/Dashboard";
import Uploadbook from "../dashboard/Uploadbook";
import Managebook from "../dashboard/Managebook";
import Editbook from "../dashboard/Editbook";
import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/book/:id", element: <Singlebook />,
        loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
      },
    ]
  },
  {
    path: "/admin/dashboard",
    element: <Dashboardlayout />,
    children: [{
      path: "/admin/dashboard",
      element: <Dashboard />
    },
    {
      path: "/admin/dashboard/upload",
      element: <Uploadbook/>
    },
    {
      path: "/admin/dashboard/manage",
      element: <Managebook/>
    },
    {
      path: "/admin/dashboard/edit-books/:id",
      element:<Editbook/>,
      loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
    }
    ]

  },
  {
    path: "sign-up",
    element: <Signup/>
  }
]);
export default router;