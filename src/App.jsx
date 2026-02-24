import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../src/Componenetes/Login"
import Registro from './Componenetes/Registro'
import Principal from './Componenetes/Principal'
import Carnets from './Componenetes/Carnets'
import Renta from './Componenetes/Renta.jsx'
import Prestamos from './Componenetes/Prestamos.jsx'
import Perfil from './Componenetes/Perfil.jsx'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Principal' element={<Principal/>}/>
        <Route path='/Carnets' element={<Carnets/>}/>
        <Route path='/Renta' element={<Renta/>}/>
        <Route path='/Prestamos' element={<Prestamos/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
      </Routes>
   </BrowserRouter>

    
    
  )
}

export default App
