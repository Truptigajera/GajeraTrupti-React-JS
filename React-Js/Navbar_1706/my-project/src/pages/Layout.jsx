 import React from 'react'
 import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 import Home from './Home'
 import About from './About'
 import Contact from './Contact'
 import Navbar from '../components/Navbar'

 const roots = createBrowserRouter([
    {
        path:'',
        element:<Navbar/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ]
    },
 ])
 
 
 const Layout = () => {
   return (
     <div>
        <RouterProvider router={roots}>

        </RouterProvider>
     </div>
   )
 }
 
 export default Layout