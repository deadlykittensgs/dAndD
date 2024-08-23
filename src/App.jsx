import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import CharecterSelection from './Pages/CharecterSelection'
import PlayGame from './Pages/PlayGame'





function App() {

  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='CharecterSelection' element={<CharecterSelection/>}/>
      <Route path='PlayGame' element={<PlayGame/>}/>
      <Route path='*' element={<Nopage/>}/>
      
    
      
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
