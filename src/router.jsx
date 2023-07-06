import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { ErrorPage } from "./pages/error/Error"
import { Index } from "./pages/index/Index"
import { MainPage } from "./pages/main/MainPage"
import { Catalogue } from "./pages/catalogue/Catalogue"
import { About } from "./components/about/About"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/index",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hotel",
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/quartos",
        element: <Catalogue />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/porque-nos",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);
