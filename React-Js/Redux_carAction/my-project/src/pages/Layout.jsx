import React from 'react'
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Whishlist from "./Whishlist"
import Navbar from '../components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const roots = createBrowserRouter(
  [
    {
      path: '',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/wishlist',
          element: <Whishlist />
        },
      ]
    }
  ]
)

const Layout = () => {
  return (
    <div>
      <RouterProvider router={roots}>
      </RouterProvider>
    </div>
  )
}

export default Layout