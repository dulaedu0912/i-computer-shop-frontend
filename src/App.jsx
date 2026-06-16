import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <div className="h-[600px] w-[600px] border bg-gray-600 relative" >
        <div className = "h-[500px] w-[500px] bg-yellow-100 flex flex-col items-center justify-center">
          <div className="h-[100px] w-[100px] bg-red-400 fixed top-[550px] left-[550px]" ></div>
          <div className="h-[100px] w-[100px] bg-green-400 absolute right-[20px] bottom-[20px]"></div>
          <div className="h-[100px] w-[100px] bg-purple-400"></div>
          <div className="h-[100px] w-[100px] bg-blue-400"></div>
        </div>

      </div>
    </>
    
  )
}

export default App
