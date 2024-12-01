//import React from 'react';

//import { StrictMode } from 'react';
import { useRoutes, Navigate } from 'react-router-dom'; // Import Navigate
import Home from './views/Home/home';
import Login from './views/Login/login';
const App = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login/> },
    { path: '/home', element: <Home/> },
    { path: '/', element: <Navigate to="/login" replace /> } // Redirect to /login

  ]);

  return routes;
};


export default App;





