import React from 'react'
import DMPlayerCards from '../Components/DMPlayerCards'
import Player1 from '../Components/Player1'

export default function PlayerView() {
  return (
    <div className='flex justify-evenly flex-wrap h-full items-center' >
    {/* <DMPlayerCards name={"name"} lvl={"0"} classType={"Bard"} hp={12} hpLeft={10} speed={35} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={10} orientation={"Neutral Good"} /> */}
    <Player1 name={"ryan"}/>
       </div>
  )
}
