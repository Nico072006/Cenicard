import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../src/Componenetes/Login"
import Registro from './Componenetes/Registro'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>
   </BrowserRouter>

    
    
  )
}

export default App
