import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios_Post = () => {

    const data ={fname:'', lname:'' }

    const [inputData, setInputData] = useState(data)
    console.log(inputData);

    const handlechange =(e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users' , inputData)
        .then(response => console.log(response))
    }
    const handleUpdate =(e) => {
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/users/1' , inputData)
        .then(response => console.log(response))
        
    }

    const handleDelet =(e) => {
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/users/1' , inputData)
        .then(response => console.log(response))
        
    }

    return (
        <div>
            <h1 className='text-white bg-blue-400 p-4 text-center font-extrabold text-2xl'>Axios Post / Put / Delete Request</h1>
            <div className='h-screen flex justify-center items-center'>
                <div className='bg-blue-400 text-white  p-10 border-4 border-double  border-blue-800 flex flex-col '>
                    <div className='mb-4'>

                        <label className='me-4 font-bold' htmlFor="firstName">FirstName</label>
                        <input type="text" className='text-black' name="fname" id="firstName" onChange={handlechange} />
                    </div>


                    <div className='mb-4'>

                        <label className='me-4 font-bold'  htmlFor="lastName">LastName</label>
                        <input type="text" className='text-black'  name="lname" id="lastName" onChange={handlechange}/>
                    </div>

                    <button onClick={handleSubmit} className='bg-gray-500 mb-3 p-3 font-bold'>Submit</button>
                    <button onClick={handleUpdate} className='bg-gray-700 mb-3 p-3 font-bold'>Update</button>
                    <button onClick={handleDelet} className='bg-gray-800 mb-3 p-3 font-bold'>Delet</button>
                </div >
            </div>


        </div>
    )
}

export default Axios_Post