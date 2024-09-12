import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './routes/Shop.jsx'
import Cart from './routes/Cart.jsx';
import './index.css'
import Story from './routes/Story.jsx';
import { ShopContextProvider } from './lib/context.jsx';


const router = createBrowserRouter([
  {
    path: "/play/wasserarm",
    element: <Story />,
  },
  {
    path: "/play/wasserarm/shop",
    element: <Shop />,
  },
  {
    path:"/play/wasserarm/Cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
