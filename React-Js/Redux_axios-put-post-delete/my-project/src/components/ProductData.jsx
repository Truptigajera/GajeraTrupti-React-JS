import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const ProductData = () => {

    const [user, setUser] = useState([])
    const [show, setShow] = useState(false)

    const handleData = () => {
        setShow(true);
    }




    useEffect(() => {
        if (show) {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {

                    setUser(response.data);
                })
                .catch(error => console.log(error));
        }
    }, [show]);



    return (
        <>
            <div>
                <button onClick={handleData}>Click Here</button>
                {
                    show && user.map(item => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>
                            <h1>{item.category}</h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductData