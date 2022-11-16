import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Surveys from "./views/Surveys.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Register from "./views/Register.jsx";
import {SurveyView} from "./views/SurveyView.jsx";
import {SurveyPublicView} from "./views/SurveyPublicView.jsx";

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
      },
      {
        path: 'surveys/create',
        element: <SurveyView />
      },
      {
        path: 'surveys/:id',
        element: <SurveyView />
      }
    ]
  },
  {
    path: 'view/surveys/:slug',
    element: <SurveyPublicView />
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

export default router
