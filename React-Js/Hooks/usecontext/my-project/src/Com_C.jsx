import React from 'react'
import { useContext } from 'react'
import { data1, data2, data3} from './App'

const Com_C = () => {

    const Firstname = useContext(data1)
    const Secondname = useContext(data2)
    const Thirdname = useContext (data3)
  return (
    <div>
        <h1>My Surname is {Firstname} .</h1>
        <h1>My Name is {Secondname}.</h1>
        <h1>My Husbund Name is {Thirdname}.</h1>


    </div>
  )
}

export default Com_C