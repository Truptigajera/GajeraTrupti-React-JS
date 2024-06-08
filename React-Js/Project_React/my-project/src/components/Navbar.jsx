import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem , Button } from "@nextui-org/react";
import { Outlet } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        
        <div>
            <div className='p-8 '>
                <div className="flex">

                    <div>
                        <nav>
                            <ul className="flex space-x-10 ms-32">
                                <li>
                                    <Link className='text-[12px] font-medium hover:text-black hover:underline' to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link className='text-[12px] font-medium hover:text-black hover:underline' to="/shop">SHOP</Link>
                                </li>   
                                <li>
                                    <Dropdown isOpen={isOpen} >
                                        <DropdownTrigger>
                                            <Button
                                                onMouseEnter={() => {
                                                    setIsOpen(true);
                                                  }}
                                            >
                                                Pages
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu onMouseLeave={() => {
                                                    setIsOpen(false);
                                                  }}>
                                            <DropdownItem key="new">
                                                <Link to="/AboutUs">About Us</Link>
                                                </DropdownItem>
                                            <DropdownItem key="copy">FAQ
                                            </DropdownItem>
                                            <DropdownItem key="edit">Contact Us
                                             </DropdownItem>
                                            
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>

                                <li>
                                    <Link className='text-[12px] font-medium hover:text-black hover:underline' to="/Elements">ELEMENTS</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className=''>
                        <Link to="/">
                            <a className='text-2xl font-bold ms-48' href="">D E P O T</a>
                        </Link>
                    </div>
                    <div className='ms-52'>
                        <ul className='flex text-[12px] font-semibold'>

                            <li className='mx-6'><Link className=''>CART <span className='text-gray-400 ms-1 font-normal '>($O)</span></Link></li>
                            <li className='mx-4 ml-2'><Link className='flex'><CiUser className='mt-1 ms-1  size-4 ' /><span className='ml-2'>LOGIN</span></Link></li>
                            <li className='mx-6'><Link className=''><VscSearch className='size-4 mt-1' /></Link></li>
                            <li className='mx-6'><Link><CiMenuBurger className=' size-4 mt-1' /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                                                  <Outlet/>
        </>
    )
}

export default Navbar