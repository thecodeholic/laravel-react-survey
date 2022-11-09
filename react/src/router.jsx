import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Surveys from "./views/Surveys.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: '/dashboard',
        element: <Navigate to={'/'} />
      },
      {
        path: 'surveys',
        element: <Surveys />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
