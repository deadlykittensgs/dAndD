import React  from 'react'
import { useState } from 'react'
import BuildPlayer2 from './BuildPlayer2'
import ListItem from './ListItem'

export default function Player2ex({playerData,setPlayerData}) {

const {name, roll, lvl, race, classType, hp, hpLeft, speed, ac, strTotal, dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName,background, size, alignment, initiative, deathSaves, actions, savingThrows, skills, toolProficiencie, abilities, inventory, notes, languages, strTotalNumber, dexTotalNumber, conTotalNumber, intTotalNumber, wisTotalNumber, chaTotalNumber, } = playerData
console.log(playerData)
const [lock, setLock] = useState(true)
const [count, setCount] = useState(0);





function incrementFirstNumber(arr, place, times) {

if (lock === false) {
  // Increment the first number `times` times
  arr[place] += times;
 
  setPlayerData({...playerData, place: arr  })
  // Return the modified array
  console.log(playerData)
  return arr;
} else {
  return
}
}


const rollTheDice = (max) => {
  let roll =  Math.floor(Math.random() * max) + 1
  setPlayerTwoData({...playerData, roll:(roll)})

}






// skills, savingThrows, 

  return (
    <div className='flex bg-slate-200/60 w-[90%] h-fit'> 


<div className='flex flex-col w-full'>
 <div className='flex justify-center items-center text-center bg-white w-full h-[50px]'>
    <h1 className='text-[1.3rem] italic ' >{name}</h1>
 </div>
        <div className='bg-slate-200 w-full flex flex-col px-2 py-2'>
            <div className='flex'>
       <div className='flex flex-col flex-1'><div className='flex-1'>{classType}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Class</div> <div><div className='flex-1'>{race}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Race</div></div> </div>
       <div className=' flex flex-col flex-1' > <div className='flex-1'>{lvl}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem] '>lvl</div> <div><div className='flex-1'>{size}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Size</div></div> </div>
       <div className='flex flex-col flex-1'> <div className='flex-1'>{background}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem] '>Background</div> <div><div className='flex-1'>{alignment}</div> <div className='flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]'>Alignment</div></div> </div>
            </div>
            
    </div>

{/* next  */}

     {/* box 2 */}
     <div className='bg-sky-300/80 min-h-[170px] w-full flex flex-col ' >
      
      <div className='flex justify-evenly items-center flex-1'>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Strength</div>
        <div onClick={() => {rollTheDice(strTotal)}} className=' h-[24px]  bg-sky-200' >{strTotal}</div>
        <div className='bg-sky-500 rounded-full'>{strTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Dexterity</div>
        <div onClick={() => {rollTheDice(dexTotal)}} className=' h-[24px]  bg-sky-200' >{dexTotal}</div>
        <div className='bg-sky-500 rounded-full'>{dexTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Constitution</div>
        <div onClick={() => {rollTheDice(conTotal)}} className='h-[24px] bg-sky-200' >{conTotal}</div>
        <div className='bg-sky-500 rounded-full'>{conTotalNumber}</div>
      </div>
      </div>
    
    
    
      <div className='flex justify-evenly items-center flex-1'>
    
     
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Intelligence</div>
        <div onClick={() => {rollTheDice(intTotal)}} className=' h-[24px]  bg-sky-200' >{intTotal}</div>
        <div className='bg-sky-500 rounded-full'>{intTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Wisdom</div>
        <div onClick={() => {rollTheDice(wisTotal)}} className=' h-[24px]  bg-sky-200' >{wisTotal}</div>
        <div className='bg-sky-500 rounded-full'>{wisTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Charisma</div>
        <div onClick={() => {rollTheDice(chaTotal)}} className=' h-[24px]  bg-sky-200' >{chaTotal}</div>
        <div className='bg-sky-500 rounded-full'>{chaTotalNumber}</div>
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
    <p>{initiative}</p>
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
    <p>{deathSaves}</p>
    <p>Death Saves</p>
</div>
</div>

<div className='flex w-full justify-center items-center h-[80px] bg-slate-500'>
   <div className='flex flex-1 justify-evenly'>
   <button onClick={() => {rollTheDice(4)}} >d4</button>
    <button onClick={() => {rollTheDice(6)}}>d6</button>
    <button onClick={() => {rollTheDice(8)}}>d8</button>
   </div>
    <div className='bg-gradient-to-r from-slate-500 to-slate-800 border border-black border-2 font-bold rounded-full h-[60px] w-[60px] flex justify-center items-center text-white'>{roll}</div>
   <div  className='flex flex-1 justify-evenly' >
   <button onClick={() => {rollTheDice(10)}}>d10</button>
    <button onClick={() => {rollTheDice(12)}}>d12</button>
    <button onClick={() => {rollTheDice(20)}}>d20</button>
   </div>
</div>

<div className='justify-center flex  flex-col bg-sky-200/80'>
<div className='flex bg-slate-400 justify-center'><h3>Actions</h3></div>
<div className='flex flex-col h-fit'>
<div>
      {actions.map((item) => (
        <ListItem key={item.id} name={item.action} description={item.description} />
      ))}
    </div>

      </div>
</div>



<div className='bg-slate-300/80 flex flex-col'>
 <div className='justify-between flex items-center'>
 <p className='text-[.7rem] p-2 text-center italic w-[100px] flex-wrap' >Proficiencies bonus +2</p>
 <h2 className='text-[1.2rem]'>Proficiencies</h2>
 <button onClick={()=> {setLock(!lock)}} className='w-[100px] h-full '>{lock ? (<i className="fa-solid fa-lock text-red-700"></i>):(<i className="fa-solid fa-lock-open text-green-700"></i>)}</button>

</div>

<div>
    <div className='flex bg-slate-400 justify-center'><h3>Saving Throws</h3></div>
  
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '>  {savingThrows[0] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[0]}</div><p>Strength</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 0, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 0, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'> {savingThrows[1] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[1]}</div><p>Dexterity</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 1, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 1, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[2] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[2]}</div><p>Constitution</p></div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 2, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 2, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button>  </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[3] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[3]}</div><p>Inelegance</p>  </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows,3, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 3, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[4] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[4]}</div><p>Wisdom</p>      </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 4, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 4, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[5] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[5]}</div><p>Charisma</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 5, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 5, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
</div>

<div> 
<div className='flex bg-slate-400 justify-center'><h3>Skills</h3></div>
    <div className='flex text-center justify-between'>  <div className='flex'><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[0] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[0]}</div><p>Acrobatics(Dex)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 0, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 0, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[1] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[1]}</div><p>Animal Handling (Wis)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 1, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 1, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[2] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[2]}</div><p>Arcana(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 2, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 2, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[3] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[3]}</div><p>Athletics(Str)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 3, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills,3, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[4] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[4]}</div><p>Deception(Cha)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 4, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 4, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[5] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[5]}</div><p>History(Int) </p>  </div>  <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 5, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 5, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[6] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[6]}</div><p>Insight(Wis)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 6, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 6, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[7] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[7]}</div><p>Intimidation(Cha)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 7, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 7, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[8] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[8]}</div><p>Investigation(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 8, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 8, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[9] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[9]}</div><p>Medicine(Wis)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 9, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 9, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[10] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[10]}</div><p>Nature(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 10, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 10, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[11] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[11]}</div><p>Perception(Wis)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 11, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 11, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[12] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[12]}</div><p>Performance(Cha)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 12, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 12, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[13] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[13]}</div><p>Persuasion(Cha)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 13, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 13, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[14] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[14]}</div><p>Religion(Int)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 14, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 14, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[15] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[15]}</div><p>Slight Of Hand(Dex)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 15, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 15, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[16] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[16]}</div><p>Stealth(Dex)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 16, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 16, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[17] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[17]}</div><p>Survival(Wis)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 17, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 17, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>


</div>

<div className='flex bg-slate-400 justify-center'><h3>Tool Proficiencies</h3></div>
<div>
<div>
        {toolProficiencie.map((item, index) => (
          <ListItem key={index} description={item}></ListItem>
        ))}
      </div>
      <button onClick={() => {console.log(Item)}}> edit </button>

</div>

<div>
<div className='flex bg-slate-400 justify-center'><h3>Abilities</h3></div>
<div>
{abilities.map((item) => (
        <ListItem key={item.id} name={item.action} description={item.description} />
      ))}
</div>
</div>

<div className='justify-center flex  flex-col bg-sky-200/80'>
<div className='flex bg-slate-400 justify-center'><h3>Inventory</h3></div>
<ul>
        {inventory.map((item, index) => (
          <li key={(index + 1000)}>{item}</li>
        ))}
      </ul>
</div>

<div className='flex bg-slate-400 justify-center'><h3>Notes</h3></div>
<div>
<ul>
        {notes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => {console.log(listItems)}}> edit </button>

</div>
<div className='flex bg-slate-400 justify-center'><h3>Languages</h3></div>
<div>
<ul>
        {languages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => {console.log(listItems)}}> edit </button>

</div>



<BuildPlayer2 playerData={playerData} setPlayerData={setPlayerData}/>

</div>






</div>
</div> 
  )
}
