import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaHeart } from "react-icons/fa";


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
   // Assuming you have cart items in your Redux state
   const wishlistItems = useSelector((state) => state.wishlist);
  // Selector for wishlist items

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Shop',
      to: '/shop',
    },
    {
      name: () => {
        return(
          <>
          <div className='flex'>
          <p>Wishlist</p>
             <span className='text-white items-center flex justify-center font-semibold text-md h-5 w-5 bg-red-500 text-center rounded-full'>
                  {wishlistItems.length}
              </span>
          </div>
           
          </>
        )
      },
      to: '/wishlist',
    },
    {
      name: 'Cart',
      to: '/cart',
    },
  ];

  return (
    <>
      <div className="w-full bg-gray-500 p-4 sticky top-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG path */}
              </svg>
            </span>
            <span className="font-bold text-white">DevUI</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className="text-sm font-semibold text-white hover:text-gray-900"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
             
              {/* Display wishlist count */}
              <span className='text-white items-center flex justify-center font-semibold text-md h-5 w-5 bg-red-500 text-center rounded-full'>
                {cartItems.length}
              </span>
              {/* Display cart count */}
            </ul>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              {/* Your mobile menu content */}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
