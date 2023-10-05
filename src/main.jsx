import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Providiers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>

    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>
    }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
