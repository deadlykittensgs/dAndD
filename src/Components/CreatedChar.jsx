import React, { useState }  from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { useAuth } from '../Components/authFunctions/AuthContext';
import { db } from '../Firebase/firebase';



export default function CreatedChar({ id, name, lvl, classType, race, handleDelete, selectPlayer }) {


  return (
    <div className='flex justify-between w-full h-[100px] bg-sky-300 border border-1 border-black border-t-transparent border-r-transparent border-l-transparent '>
        
        <div className='flex items-center text-[.8rem]'>
        <div className='flex bg-slate-600 h-[50px] w-[50px] justify-center items-center m-3' >image</div>
        <div>
            <p>{name}</p>
            <div className='flex gap-1'>
                <p>lvl {lvl}</p>
                <p>|</p>
                <p>{race}</p>
            </div>
            <p>{classType}</p>
        </div>
        </div>

        <div className='flex flex-col w-[50px] justify-between m-2'>
            <button onClick={() => {handleDelete(id)}} ><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => {selectPlayer(id)}} >play</button>
        </div>
      

    </div>
  )
}
