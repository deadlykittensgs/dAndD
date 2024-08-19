import React from 'react'

export default function Header() {
  return (
    <div className='bg-black text-white h-[50px] w-screen flex items-center justify-evenly' >
    <a  href='home' >Home</a>
    <a href='https://www.dndbeyond.com/spells' target='_blank' >Spells</a>
    <a href='https://www.dndbeyond.com/classes' target='_blank' >Classes</a>
    <a href='https://www.dndbeyond.com/races' target='_blank' >Races</a>
    <a href='https://www.dndbeyond.com' target='_blank' >Official sight</a>
        </div>
  )
}
