import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios_Post = () => {

    const data = { fname: '', lname: '' }

    const [inputData, setInputData] = useState(data)
    console.log(inputData);

    const handleChange =(e) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
            .then(response => console.log(response))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/users/1', inputData)
            .then(response => console.log(response))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/users/1', inputData)
            .then(response => console.log(response))
    }

    return (
        <div>
            <div>
                <h1 className='text-white bg-purple-500 p-5 text-center'>Axios post  / Put / Delete Request</h1>
                <div className='flex justify-center items-center h-screen '>
                    <div className='bg-purple-500 text-black p-6 border-4 border-dashed border-black flex flex-col'>
                        <div className='mb-4'>
                            <label className='me-4 text-white' htmlFor="First Name">First Name</label>
                            <input type="text" name='fname' id='First Name' onChange={(e) =>  setInputData({...inputData , [e.target.name]:e.target.value})} value={inputData.fname}/>
                        </div>
                        <div className='mb-4'>
                            <label className='me-4 text-white' htmlFor="Last Name ">Last Name</label>
                            <input type="text" name='lname' id='Last Name' onChange={(e) =>  setInputData({...inputData , [e.target.name]:e.target.value})} value={inputData.lname}/>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className='bg-blue-900 w-full mb-2 text-white p-2 rounded-xl '>Submit</button>
                            <button onClick={handleUpdate} className='bg-red-900 w-full mb-2  text-white p-2 rounded-xl'>Update</button>
                            <button onClick={handleDelete} className='bg-yellow-500 w-full  text-white p-2 rounded-xl'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Axios_Post
