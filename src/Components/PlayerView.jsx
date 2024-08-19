import React from 'react'
import DMPlayerCards from '../Components/DMPlayerCards'

export default function PlayerView() {
  return (
    <div className='flex justify-evenly flex-wrap h-full items-center' >
    <DMPlayerCards name={"bob"} lvl={"0"} classType={"Bard"} hp={12} hpLeft={10} speed={35} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={10} orientation={"Neutral Good"} />
       </div>
  )
}
