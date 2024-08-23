import React from 'react'
import DMPlayerCards from '../Components/DMPlayerCards'
export default function DmView() {
  return (
    <div className='flex justify-evenly flex-wrap h-full items-center' >
  <DMPlayerCards name={"bob"} lvl={"5"} classType={"wizard"} hp={12} hpLeft={5} speed={35} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={30} orientation={"Neutral Good"} />
  <DMPlayerCards name={"sam"} lvl={"2"} classType={"Bard"} hp={20} hpLeft={9} speed={20} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={80} orientation={"evil"} />
  <DMPlayerCards name={"tom"} lvl={"0"} classType={"barbarian"} hp={15} hpLeft={10} speed={35} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={70} orientation={"Chaotic Good"} />
  <DMPlayerCards name={"toad"} lvl={"3"} classType={"halfling"} hp={9} hpLeft={4} speed={30} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={50} orientation={"Neutral"} />
  <DMPlayerCards name={"live"} lvl={"0"} classType={"dragonborn"} hp={12} hpLeft={5} speed={35} ac={14} strTotal={"+1"} dexTotal={"+2"} conTotal={"-1"} intTotal={"-2"} wisTotal={"+3"} chaTotal={0} gold={100} orientation={"Good"} />
    </div>
  )
}
