import React from 'react'

export default function DMPlayerCards() {
  return (
    <div className='min-w-[250px] h-[300px] bg-sky-300 m-1'> 



    {/* box 1 */}
        <div className='flex h-[100px] bg-slate-200'>
         <div className='flex-1 flex flex-col justify-center items-center'> 
         <div>Name</div>
          <div className='bg-sky-300 h-[50px] w-[50px] rounded-full'></div> 
          <div className='flex items-center w-full justify-between' >
            <p className='ml-3' >lvl 3</p>
            <p className='mr-3' >bard</p>
          </div>
          </div>
    
         <div className='bg-slate-500 flex flex-col flex-wrap items-center justify-evenly flex-1'> 
         <div className='text-center' >
          <p>hp</p>
          <p>15</p>
         </div>
         <div className='text-center' >
          <p>ac</p>
          <p>14</p>
         </div>
    
         <div className='text-center' >
          <p>speed</p>
          <p>30</p>
         </div>
    
         <div className='text-center'>
          <p>other</p>
          <p>14</p>
         </div>
         
         </div>
    
        </div>
    {/* box 2 */}
    <div className='bg-sky-600 min-h-[170px] w-full flex flex-col ' >
      
      <div className='flex justify-evenly items-center flex-1'>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Strength</div>
        <div className='bg-sky-200' >0</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Dexterity</div>
        <div className='bg-sky-200' >+1</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Constitution</div>
        <div className='bg-sky-200' >-3</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
    
    
    
      <div className='flex justify-evenly items-center flex-1'>
    
     
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Intelligence</div>
        <div className='bg-sky-200' >+2</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Wisdom</div>
        <div className='bg-sky-200' >+1</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Charisma</div>
        <div className='bg-sky-200' >+3</div>
        <div className='bg-sky-500 rounded-full'>18</div>
      </div>
      </div>
    </div>
    
    <div className='flex justify-between'> 
      <p className='pl-3'>neutral good</p>
      <p className='pr-3'>cleric</p>
    </div>
        </div>
  )
}
