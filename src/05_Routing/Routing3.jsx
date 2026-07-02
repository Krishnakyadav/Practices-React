import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
   {
    path:"/contact",
    element:<Contact/>
  },
   {
    path:"/signup",
    element:<Signup/>
  },
   {
    path:"/login",
    element:<Login/>
  }
])

const Routing3 = () => {
  return (
   <RouterProvider router = {routes}/>
  );
};

export default Routing3;
