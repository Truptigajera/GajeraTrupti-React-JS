import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const ProductData = () => {

    const [user, setUser] = useState([])
    const [show, setShow] = useState(false)

    console.log('UserData', user);

    const hendleData = () => {
        setShow(true)
    }

    useEffect(() => {
        if(show){
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setUser(response.data))
            .catch(error => console.log(error))
        }
    }, [show])

    return (
        <div>
            <button onClick={hendleData}>click for productdata</button>
            {
                show && user.map((item) =>{
                    return (
                        <>
                            <div key={item.id}>
                                <h1>{item.title}</h1>
                                <h1>{item.price}</h1>
                                <h1>{item.category}</h1>
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductData


