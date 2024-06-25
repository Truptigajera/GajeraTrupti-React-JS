import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Axios_Get = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setData(response.data))
    },[])
    return (
        <div className='flex gap-10 flex-wrap'>
            {
                data.map(item => {
                    return (
                        <>
                            <div className='w-52 border-2 border-solid border-black items-center text-center'>
                                <div>{item.name}</div>
                                <span>{item.email}</span>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Axios_Get

