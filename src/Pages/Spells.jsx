import React from 'react'
import SpellCards from '../Components/SpellCards'
import Header from '../Components/Header'

export default function Spells() {
  return (
    <div className=' flex flex-wrap w-screen h-screen bg-slate-300 justify-center'>
<Header/>
<SpellCards/>
<SpellCards/>
<SpellCards/>
<SpellCards/>
<SpellCards/>

    </div>
  )
}
