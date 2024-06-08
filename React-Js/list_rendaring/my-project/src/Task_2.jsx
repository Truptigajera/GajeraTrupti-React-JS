import React from 'react'
import { Data } from './Data'

const Task_2 = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center text-blue-700">Search Here</h1>
                <div className="text-center mt-14 mx-auto">
                    <input
                        placeholder='Enter User Name'
                        className="border-2 p-2 mb-10 mx-auto" />
                </div>
                <div>
                    <ul className='text-center'>
                        <div>
                            <table className='text-3xl'>
                                <thead>
                                    <tr>
                                        <th>first Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            Data.map((user) => {
                                                return (
                                                    <>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.lastName}</td>
                                                        <td>{user.age}</td>
                                                        <td>{user.gender}</td>
                                                        <td>{user.email}</td>
                                                    </>
                                                )
                                            })
                                        }

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Task_2
