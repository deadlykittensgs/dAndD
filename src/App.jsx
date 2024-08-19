import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import CharecterSelection from './Pages/CharecterSelection'
import Character from './Pages/Character'
import CharacterCreation from './Pages/CararacterCreation'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='CharecterSelection' element={<CharecterSelection/>}/>
      <Route path='Character' element={<Character/>}/>
      <Route path='CharacterCreation' element={<CharacterCreation/>}/>
      <Route path='*' element={<Nopage/>}/>
      
    
      
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
