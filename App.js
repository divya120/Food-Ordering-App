import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo"

const AppLayout = () => {
  
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
       }, 
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantInfo/>
      }
    ],
    errorElement: <Error/> 
  }
])
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
