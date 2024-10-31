import { StrictMode } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './component/Home/home';
import Login from './component/OAuth/login'
const App = () => {
  const routes = useRoutes([
    { path: '/home', element: <Home/> },
    { path: '/login', element: <Login/> },
  ]);

  return routes;
};

export default App;





