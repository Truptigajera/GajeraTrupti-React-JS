import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
  
import Edit from './pages/Edit'
import Add from './pages/Add'
 


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        
        <Route path="/add" element={<Add/>}></Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App