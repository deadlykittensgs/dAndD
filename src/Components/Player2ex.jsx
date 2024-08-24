import React  from 'react'
import { useState } from 'react'

export default function Player2ex({playerTwoData,setPlayerTwoData}) {

const {name, roll, lvl, race, classType, hp, hpLeft, speed, ac, strTotal, dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName } = playerTwoData




  return (
    <div className='flex bg-slate-200/60 w-[90%] h-fit overflow-auto'> 


<div className='flex flex-col w-full'>
 <div className='flex justify-center items-center text-center bg-white w-full h-[50px]'>
    <h1 className='text-[1.3rem] italic ' >{name}</h1>
 </div>
        <div className='bg-slate-200 w-full flex flex-col'>
            <div className='flex'>
       <div className='flex flex-col flex-1'><div className='flex-1'>{classType}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Class</div> <div><div className='flex-1'>{race}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Race</div></div> </div>
       <div className=' flex flex-col flex-1' > <div className='flex-1'>{lvl}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem] '>lvl</div> <div><div className='flex-1'>medium</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Size</div></div> </div>
       <div className='flex flex-col flex-1'> <div className='flex-1'>Folk Hero</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem] '>Background</div> <div><div className='flex-1'>NG</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Alignment</div></div> </div>
            </div>
            
    </div>

{/* next  */}

     {/* box 2 */}
     <div className='bg-sky-300/80 min-h-[170px] w-full flex flex-col ' >
      
      <div className='flex justify-evenly items-center flex-1'>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Strength</div>
        <div onClick={() => {rollTheDice(strTotal)}} className=' h-[24px]  bg-sky-200' >{strTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Dexterity</div>
        <div onClick={() => {rollTheDice(dexTotal)}} className=' h-[24px]  bg-sky-200' >{dexTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Constitution</div>
        <div onClick={() => {rollTheDice(conTotal)}} className='h-[24px] bg-sky-200' >{conTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
    
    
    
      <div className='flex justify-evenly items-center flex-1'>
    
     
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Intelligence</div>
        <div onClick={() => {rollTheDice(intTotal)}} className=' h-[24px]  bg-sky-200' >{intTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Wisdom</div>
        <div onClick={() => {rollTheDice(wisTotal)}} className=' h-[24px]  bg-sky-200' >{wisTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Charisma</div>
        <div onClick={() => {rollTheDice(chaTotal)}} className=' h-[24px]  bg-sky-200' >{chaTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
</div>
{/* box 3  */}
<div className='bg-slate-200 w-full h-[200px] flex flex-wrap justify-evenly items-center'>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{ac}</p>
    <p>Armor Class</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>+3</p>
    <p>Initiative</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{speed} ft</p>
    <p>Speed</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
   <div className='flex'>
     <p>{hpLeft}</p>
    <p>/</p>
    <p>{hp}</p>
    </div>
    <p>Hp</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center rounded' >
    <p>10</p>
    <p>Hit Dice</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>0</p>
    <p>Death Saves</p>
</div>
</div>



<div className='bg-slate-300/80 flex flex-col'>
 <div className='justify-center flex'>
 <h2 className='text-[1.2rem] p-2'>Proficiencies</h2>
</div>

<div>
    <div className='flex bg-slate-400 justify-center'><h3>Saving Throws</h3></div>
  
    <div className='flex text-center'> <div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Strength</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Dexterity</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Constitution</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Inelegance</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Wisdom</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Charisma</p> </div>
</div>

<div> 
<div className='flex bg-slate-400 justify-center'><h3>Skills</h3></div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Acrobatics(Dex)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Animal Handling (Wis)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Arcana(Int)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Athletics(Str)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Deception(Cha)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>History(Int) </p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Insight(Wis)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Intimidation(Cha)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Investigation(Int)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Medicine(Wis)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Nature(Int)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Perception(Wis)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Performance(Cha)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Persuasion(Cha)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Religion(Int)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Slight Of Hand(Dex)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Stealth(Dex)</p> </div>
    <div className='flex text-center'> <div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline'>+2</div><p>Survival(Wis)</p> </div>


</div>

<div>
<div className='flex bg-slate-400 justify-center'><h3>Abilities</h3></div>
<div className='flex justify-between p-2'><p>DarkVision</p> <button className='bg-slate-300 rounded p-1'>Info</button></div>
<div className='flex justify-between p-2'><p>Fay Ancestry</p> <button className='bg-slate-300 rounded p-1'>Info</button></div>
<div className='flex justify-between p-2'><p>Trance</p> <button className='bg-slate-300 rounded p-1'>Info</button></div>
<div className='flex justify-between p-2'><p>Mask Of The Wild</p> <button className='bg-slate-300 rounded p-1'>Info</button></div>
</div>

</div>






</div>
</div> 
  )
}
