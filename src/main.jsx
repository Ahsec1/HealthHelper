import React from 'react'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/Homepage" element = {<Homepage/>} />
        <Route path = "/Register" element = {<Register/>} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
