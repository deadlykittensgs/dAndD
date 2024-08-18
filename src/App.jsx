import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import CharecterSelection from './Pages/CharecterSelection'
import Character from './Pages/Character'
import Cls from './Pages/Cls'
import Spells from './Pages/Spells'
import Races from './Pages/Races'




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
      <Route path='Races' element={<Races/>}/>
      <Route path='Spells' element={<Spells/>}/>
      <Route path='Cls' element={<Cls/>}/>
      <Route path='*' element={<Nopage/>}/>
      
    
      
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
