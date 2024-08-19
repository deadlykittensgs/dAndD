import React from 'react'

export default function CreatedChar() {
  return (
    <a href='playGame' className='flex justify-between w-full h-[100px] bg-sky-300 border border-1 border-black border-t-transparent border-r-transparent border-l-transparent '>
        
        <div className='flex items-center text-[.8rem]'>
        <div className='flex bg-slate-600 h-[50px] w-[50px] justify-center items-center m-3' >image</div>
        <div>
            <p>Name</p>
            <div className='flex gap-1'>
                <p>lvl 1</p>
                <p>|</p>
                <p>Race</p>
            </div>
            <p>class</p>
        </div>
        </div>

        <div className='flex flex-col w-[50px] justify-between m-2'>
            <button><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
      

    </a>
  )
}
