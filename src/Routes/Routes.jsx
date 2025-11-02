import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <div className="text-5xl">Auth layout</div>,
  },
  {
    path: "/news",
    element: <div className="text-5xl">News Layout</div>,
  },
  {
    path: "/*",
    element: <div className="text-5xl">Error page</div>,
  },
]);
