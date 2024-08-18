import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import CharecterSelection from './Pages/CharecterSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-100 flex w-screen h-screen'>
   <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='CharecterSelection' element={<CharecterSelection/>}/>
      <Route path='Character' element={<Character/>}/>
      <Route path='*' element={<Nopage/>}/>
      
    
      
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
