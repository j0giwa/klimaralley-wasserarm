import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routes/App.jsx'
import Shop from './routes/Shop.jsx'
import Cart from './routes/Cart.jsx';
import './index.css'
import Homepage from './routes/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/play/wasserarm",
    element: <App />,
  },
  {
    path: "/play/wasserarm/shop",
    element: <Shop />,
  },
  {
    path:"/play/wasserarm/cart",
    element: <Cart />,
  },
  {
    path:"/play/wasserarm/homepage",
    element: <Homepage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
