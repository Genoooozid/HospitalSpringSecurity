import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { createRoot } from 'react-dom/client'
import Login from './Login/Login'
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/Hospital/Login' element={<Login />} />
      
    </Routes>
  </Router>
)
