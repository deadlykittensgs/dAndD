import React, { useState, useEffect }  from 'react'
import Header from '../Components/Header'
import DmView from '../Components/DmView'
import PlayerView from '../Components/PlayerView'







export default function PlayGame() {

    const [chooseView, setChooseView] = useState("p1")
    
  
function changeView(props) {
    setChooseView(props)
    }
    
    useEffect(() => {
        if (chooseView === "dm") {
           console.log("it worked") 
        } 
        if (chooseView === "p1") {
            console.log("it worked p1") 
         } 
       
       
         }, [chooseView]);
    



  return (

    
    <div className=' flex flex-col h-screen w-screen bg-slate-700'>
        <Header/>
        <div className='w-full h-[40px] bg-red-300 flex  justify-evenly'>
            <button onClick={() => {changeView("dm")}} >DM</button>
            <button onClick={() => {changeView("p1")}} >Player 1</button>
            <button onClick={() => {changeView("p2")}} >Player 2</button>
            <button onClick={() => {changeView("p3")}} >Player 3</button>
            <button onClick={() => {changeView("p4")}} >Player 4</button>
          
        </div>
        {/* body  */}
<div className='flex justify-evenly flex-wrap h-full items-center' >

{chooseView === "dm" ? (<DmView/>):(<></>)}
{chooseView === "p1" || "p2" || 'p3' || "p4" ? (<PlayerView/>):(<></>)}


</div>
    </div>
  )
}
