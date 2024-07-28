//lib
import { createBrowserRouter } from 'react-router-dom';

//components
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';

//constants
import { ROUTE_MAP } from './constants';

export const router = createBrowserRouter([
  {
    path: ROUTE_MAP.AUTH,
    element: <Auth />,
  },
  {
    path: ROUTE_MAP.HOME,
    element: <Home />,
  },
]);
