 
 
// import { counter } from '@fortawesome/fontawesome-svg-core'

import Com_C from "./Com_C"
import { createContext } from "react"

const data1 = createContext ()
const data2 = createContext ()
const data3 = createContext ()


function App() {
   
const Name = "Gajera"
const Name1="Trupti"
const Name2="Kishor"
  return (
    <>
      <data1.Provider value={Name}>
        <data2.Provider value={Name1}>
          <data3.Provider value={Name2}>

      <Com_C/> 
          </data3.Provider>

        </data2.Provider>
      </data1.Provider>
     
    </>
  )
}

export default App
export {data1, data2, data3}
