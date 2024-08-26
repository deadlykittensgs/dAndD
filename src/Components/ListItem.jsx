import React from 'react'
import { useState } from 'react'



export default function ListItem({name, description}) {


  return (

    <div className='flex-col p-1'>
      <div className='flex w-full justify-between p-1'>
      <p className='font-bold'>{name}</p>
      <div>
      <button onClick={() => {window.open(`https://www.google.com/search?q=d+and+d++${name}`, '_blank', 'noopener,noreferrer')}}  className='bg-slate-500' >help</button>
      <button className='bg-white' >edit</button>
      </div>

      </div>
<div className=' w-full h-fit'>
<p className='italic'>{description}</p>
</div>
    </div>
  )
}
