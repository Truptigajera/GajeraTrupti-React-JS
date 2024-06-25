import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link}  from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";


 


const Home = () => {

  const[data,setData] = useState([])
  
  
  //axios

  const loadUser = async() => {
    const res = await axios.get('http://localhost:3000/users');
    setData(res.data)
  }

  useEffect(() => {
    loadUser()
  },[])

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(()=>{
      loadUser();
    })
    .catch((error)=>{
      console.log(error);
    })

  } 
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className='flex flex-wrap px-10 py-4   '>

<div className="flex grow justify-start mt-4 w-full md:w-auto">
  <div className="flex items-center relative">
    <IoSearchSharp className="h-5 w-5 mr-2 text-gray-600 absolute ml-52" /> {/* Search icon */}
    <input
      className="flex h-10 w-full md:w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="text"
      placeholder="Search users"  />
  </div>
</div>


<div className="flex grow  justify-center items-center space-x-2 mt-4 md:mt-0 md:w-1/3 ">
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="email"
    placeholder="Email"
  ></input>
  <button
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Subscribe
  </button>
</div>
</div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-black">Users</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <Link to="/add"> 
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Users
            </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Users</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Proffesion
                      </th>
                
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Delete
                      </th>
                    
                      
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                      
                        {data.map((employee) => (
                          <tr key={employee.username}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={employee.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 ">
                                    {employee.username}
                                  </div>
                                  <div className="text-sm text-gray-500">{employee.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900">{employee.proffesion}</div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                {employee.age}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                              {employee.number}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 rel text-right text-sm font-medium">
                              <Link to={`/edit/${employee.id}`} href="#" className="text-gray-500">
                              <FaUserEdit className='text-2xl' />
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 rel text-right text-sm font-medium">
                              <button href="#" className="text-gray-500 " onClick = {()=> onDelete(employee.id)}>
                              <MdDeleteForever className='text-2xl' />
                              </button>
                            </td>
                          </tr>
                        ))}
                      
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>previous</span>
          </a>

          <div className="hidden items-center gap-x-3 md:flex">
            <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
              1
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              2
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              3
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              ...
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              12
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              13
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
export default Home
