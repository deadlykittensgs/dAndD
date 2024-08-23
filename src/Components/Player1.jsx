import React from 'react'

export default function Player1({name, lvl, classType, hp, hpLeft, speed, ac, strTotal, dexTotal, conTotal, intTotal, wisTotal, chaTotal, orientation, gold}) {
  return (
    <div className='w-[250px] h-[300px] bg-sky-300 m-1'> 



    {/* box 1 */}
        <div className='flex h-[100px] bg-slate-200'>
         <div className='flex-1 flex flex-col justify-center items-center'> 
         <div>{name ? name : "Name"}</div>
          <div className='bg-sky-300 h-[50px] w-[50px] rounded-full'></div> 
          <div className='flex items-center w-full justify-between' >
            <p className=' font-bold  text-[.8rem] ml-1' >lvl {lvl ? lvl : 0 }</p>
            <p className='mr-1 justify-center' > {classType ? classType : "classType"}</p>
          </div>
          </div>
    
         <div className='bg-slate-500 flex flex-col flex-wrap items-center justify-evenly flex-1'> 
         <div className=' h-[50px] text-center' >
          <p>HP</p>
          <div className='flex items-center justify-center'>
          <p>{hpLeft ? hpLeft : 0}</p>
          <p>/</p>
          <p>{hp ? hp : 0}</p>
          </div>
         
         </div>
         <div className=' h-[50px] text-center' >
          <p>AC</p>
          <p>{ac ? ac : 0 }</p>
         </div>
    
         <div className=' h-[50px] text-center' >
          <p>Speed</p>
          <p>{speed ? speed : 0 }</p>
         </div>
    
         <div className=' h-[50px] text-center'>
          <p>Level</p>
          <p>{lvl}</p>
         </div>
         
         </div>
    
        </div>
    {/* box 2 */}
    <div className='bg-sky-600 min-h-[170px] w-full flex flex-col ' >
      
      <div className='flex justify-evenly items-center flex-1'>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Strength</div>
        <div className=' h-[24px]  bg-sky-200' >{strTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Dexterity</div>
        <div className=' h-[24px]  bg-sky-200' >{dexTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Constitution</div>
        <div className='h-[24px] bg-sky-200' >{conTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
    
    
    
      <div className='flex justify-evenly items-center flex-1'>
    
     
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Intelligence</div>
        <div className=' h-[24px]  bg-sky-200' >{intTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Wisdom</div>
        <div className=' h-[24px]  bg-sky-200' >{wisTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Charisma</div>
        <div className=' h-[24px]  bg-sky-200' >{chaTotal}</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
    </div>
    
    <div className='flex justify-between'> 
      <p className='pl-3'>{orientation ? orientation : "orientation" }</p>
      <div className='flex gap-2' >
        <p>Gold</p>
        <p className='pr-3'>{gold ? gold : 0}</p>
        </div>
    </div>
        </div>
  )
}
