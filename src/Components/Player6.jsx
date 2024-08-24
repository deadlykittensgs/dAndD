import React from 'react'
import { useState } from 'react';


export default function Player3({playerSixData,setPlayerSixData}) {


const {name, roll, lvl, race, classType, hp, hpLeft, speed, ac, strTotal, dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName } = playerSixData
const [isToggled, setIsToggled] = useState(false)
const toggle = () => setIsToggled(!isToggled);



const changeHp = (num) => {
    let HealthLeft = Number(hpLeft)
    let newTotal = 0
        if (num === "up"){
           newTotal = newTotal + 1 + hpLeft
        }
        if (num ==="down"){
            newTotal = newTotal - 1 + hpLeft
        }
        setPlayerSixData({
            ...playerSixData,
            hpLeft: newTotal
        })
      };


      const rollTheDice = (modifier) => {

        let roll = Math.floor(Math.random() * (20));
        let total = roll + modifier 
        setPlayerSixData({
            ...playerSixData,
            roll: total
        })
      }

      const lvlHelp = (type) => {

        let classType = type.toLowerCase()
        try {
            window.open(`https://www.dndbeyond.com/classes/${classType}`, '_blank', 'noopener,noreferrer');
        } catch (error) {
         console.log(error)
        }     
      }

      const raceHelp = (raceType) => {

        let race = raceType.toLowerCase()
        try {
            window.open(`https://www.dndbeyond.com/races/${race}`, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.log(error)
        }
      }


  return (
    <div className='w-[250px] h-[300px] bg-sky-300 m-1'> 


    {/* box 1 */}
        <div className='flex h-[100px] bg-slate-200'>
         <div className='flex-1 flex flex-col justify-center items-center'> 
         <div>{name}</div>
          <div className='bg-sky-300 flex h-[50px] w-[50px] justify-center items-center rounded-full'>{roll}</div> 
          <div className='flex items-center w-full justify-between' >
            <p className=' font-bold  text-[.8rem] ml-1' >lvl {lvl}</p>
            <button onClick={() => {lvlHelp(classType)}} className='mr-1 justify-center' > {classType}</button>
          </div>
          </div>
    
         <div className='bg-slate-500 flex flex-col flex-wrap items-center justify-evenly flex-1'> 
         <div className=' h-[50px] text-center' >
         
            <div className="flex items-center gap-1" >
            <button onClick={() => {changeHp("down")}} className="bg-slate-200 p-1 " > - </button>
                    <p>Hp</p>
           <button onClick={() => {changeHp("up")}} className="bg-slate-200 p-1"> + </button>
            </div>


          <div className='flex items-center justify-center'>
          <p>{hpLeft}</p>
          <p>/</p>
          <p>{hp}</p>
          </div>
         
         </div>
         <div className=' h-[50px] text-center' >
          <p>AC</p>
          <p>{ac}</p>
         </div>
         <div className=' h-[50px] text-center' >
          <p>Speed</p>
          <p>{speed}</p>
         </div>
    
         <div className=' h-[50px] text-center'>
          <p>Race</p>
          <button onClick={() => {raceHelp(race)}} >{race}</button>
         </div>
         
         </div>
    
        </div>
    {/* box 2 */}
    <div className='bg-sky-600 min-h-[170px] w-full flex flex-col ' >
      
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
    
    <div className='flex justify-between'> 
      <p className='pl-3'>{playerName}</p>
      <div className='flex gap-2' >
        <p>Gold</p>
        <p className='pr-3'>{gold}</p>
        </div>
    </div>
        </div>
  )
}
