import { StrictMode } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './views/Home/home';
import Login from './views/Login/login';
const App = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login/> },
    { path: '/home', element: <Home/> }
  ]);

  return routes;
};


export default App;





