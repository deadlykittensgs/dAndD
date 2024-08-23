import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CreatedChar from '../Components/CreatedChar'
import Builder from '../Components/Builder'
import { useState } from 'react'

export default function CharecterSelection() {

  const [divs, setDivs] = useState([])
  const [build, setBuild] = useState(true)
 



  // function removeCharacter() {
  //   setDivs(divs.pop)
  // }

  function addCharacter(name, lvl, classType, race,) {
    setDivs([...divs, <CreatedChar  divs={divs} setDivs={setDivs} key={divs.length} name={name} lvl={lvl} classType={classType} race={race} />])
    
      
  }




  return (

   
  
    <div className='flex flex-col h-screen w-screen bg-blue-500'>
    <Header/>
    <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='bg-slate-200 h-[80%] w-[90%]'>
            <div className='flex w-full h-[70px] justify-between items-center p-4'>
                <p>Create New Character</p>
                <button onClick={() => {setBuild(false)}} className='bg-sky-200 p-2 rounded'>Create</button>
            </div>
            <div>
                
            </div>
            <div className='flex flex-col h-[620px] w-full overflow-y-auto'>
              {build ? divs : <Builder addCharacter={addCharacter} build={build} setBuild={setBuild} />} 
            
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
