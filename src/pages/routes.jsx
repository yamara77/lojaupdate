import { createBrowserRouter } from "react-router-dom"
import DashboardLayoutBasic from "../components/Layout"
import { Home, SignIn, Products } from "@pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/administrador",
    element: <DashboardLayoutBasic />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
])
