import React  from 'react'
import AuthDetails from "../Components/authFunctions/authDetails"

export default function Header() {
  return (
    <div className='graybg text-white h-[70px] w-screen flex justify-evenly items-center gap-3 text-[.5rem]' >

      <AuthDetails/>
    <a  href='home' >Home</a>
    <a className='bg-slate-300/30 p-2' href='https://www.dndbeyond.com/spells' target='_blank' >Spells</a>
    <a className='bg-slate-300/30 p-2' href='https://www.dndbeyond.com/classes' target='_blank' >Classes</a>
    <a className='bg-slate-300/30 p-2' href='https://www.dndbeyond.com/races' target='_blank' >Races</a>
    <a className='bg-slate-300/30 p-2' href='https://www.dndbeyond.com' target='_blank' >Official sight</a>
    <a className='bg-slate-300/30 p-2' href='CharecterSelection' >char selection</a>
    <a className='bg-slate-300/30 p-2' href="/playGame">play</a>
        </div>

  )
}
