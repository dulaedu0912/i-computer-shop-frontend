import { useState } from 'react'
import './App.css'
import Test from './components/test'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'


function App() {
  return ( 
    <BrowserRouter>
      <div className='w-full h-screen bg-amber-500'>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>

      </div>      
    </BrowserRouter>
  )
}

export default App
