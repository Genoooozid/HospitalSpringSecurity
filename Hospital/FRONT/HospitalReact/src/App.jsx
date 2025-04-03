import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { Camas } from './CamasPisos/Camas/GestionarCamas';
import {GestionPisos} from './CamasPisos/Pisos/GestionarPisos'
import { GestionCamas } from './CamasPisos/Camas/GestionCama';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/camas' element={<Camas/>}></Route>
        <Route path='/modal' element={<GestionPisos/>}></Route>
        <Route path='/piso' element={<GestionCamas/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
