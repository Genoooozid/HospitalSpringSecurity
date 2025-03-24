import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { Camas } from './CamasPisos/Camas/GestionarCamas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/camas' element={<Camas/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
