import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantInfo from "./src/components/RestaurantInfo";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

const Grocery = lazy(() => import("./src/components/Grocery"));

const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {

  const[userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userDetails={
      name: "Divya Kulkarni"
    }
    setUserInfo(userDetails.name)
  }, [])
  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userInfo, setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
    </UserContext.Provider>
    </Provider>
  
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "./cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
