import React from 'react'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import Appointments from './pages/Appointments.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/Homepage" element = {<Homepage/>} />
        <Route path = "/Register" element = {<Register/>} />
        <Route path = "/Appointments" element = {<Appointments/>} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
