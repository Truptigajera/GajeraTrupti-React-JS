import React from 'react'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import FAQ from './pages/FAQ'
import Wishlist from './pages/Wishlist'
//import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'
import Login from './pages/Login';


 const router = createBrowserRouter([
    {
      element:<Navbar/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/shop',
          element:<Shop/>,
        },
        {
          path:'/pages',
          element:<Pages/>,
        },
        {
          path:'/faq',
          element:<FAQ/>,
        },
        {
          path:'/aboutus',
          element:<AboutUs/>,
        },
        {
          path:'/contactus',
          element:<ContactUs/>,
        },
        {
          path:'/wishlist',
          element:<Wishlist/>,
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      ],
    },
 ]);

//React Router 6.4
// ReactProvider, CreateBrowserrouter , route




const App = () => {
  return (
    <>
      <RouterProvider router={router}>
      
      </RouterProvider>
      <Footer/>
    </>
    // <BrowserRouter>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/aboutus" element={<AboutUs/>}></Route>
    //     <Route path="/contactus" element={<ContactUs/>}></Route>
    //   </Routes>
    //   <Footer/>
    // </BrowserRouter>
  )
}

export default App