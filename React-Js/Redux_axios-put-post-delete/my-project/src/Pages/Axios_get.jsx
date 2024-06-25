import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Axios_get = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users'
        ).then(response => setData(response.data))
    }, [])
    return (
        <div className='flex  flex-wrap gap-10 '>
            {
                data.map(item => {
                    return (
                        <>
                            <div key={item.id} className='w-52 border-2 border-solid border-black shadow-2xl'>
                                <div>{item.name}</div>
                                <span>{item.email} </span>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Axios_get