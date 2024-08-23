import React, { useState, useEffect }  from 'react'
import Header from '../Components/Header'
import DmView from '../Components/DmView'
import PlayerView from '../Components/PlayerView'
import DMPlayerCards from '../Components/DMPlayerCards'


export default function PlayGame() {


    // const [players, SetPlayers] = useState([<DMPlayerCards/> ,<DMPlayerCards/>])
    const [name, setName] = useState("player 1")
    const [lvl, setLvl] = useState("0")
    const [classType, setClassType] = useState("wizard")
    const [hp, setHp] = useState(10)
    const [hpLeft, setHpLeft] = useState(8)
    const [speed, setSpeed] = useState("30")
    const [ac, setAc] = useState("13")
    const [strTotal, setStrTotal] = useState("+1")
    const [dexTotal, setDexTotal] = useState("+1")
    const [conTotal, setConTotal] = useState("+1")
    const [intTotal, setIntTotal] = useState("+1")
    const [wisTotal, setWisTotal] = useState("+1")
    const [chaTotal, setChaTotal] = useState("+1")
    const [gold, setGold] = useState("100")
    const [playerName, setPlayerName] = useState("your name")
    const [roll, setRoll] = useState()
    const [race, setRace] = useState("human")
    
    
// player 2
    const [name2, setName2] = useState("Player 2")
    const [lvl2, setLvl2] = useState("2")
    const [classType2, setClasstype2] = useState("wizard")
    const [hp2, setHp2] = useState("20")
    const [hpLeft2, setHpLeft2] = useState("10")
    const [speed2, setSpeed2] = useState("35")
    const [ac2, setAc2] = useState("14")
    const [strTotal2, setStrTotal2] = useState("+2")
    const [dexTotal2, setDexTotal2] = useState("+2")
    const [conTotal2, setConTotal2] = useState("+2")
    const [intTotal2, setIntTotal2] = useState("+2")
    const [wisTotal2, setWisTotal2] = useState("+2")
    const [chaTotal2, setChaTotal2] = useState("+2")
    const [gold2, setChooseView2] = useState("150")
    const [playerName2, setPlayerName2] = useState("your name")
    // player3 
    const [name3, setName3] = useState("Player 3")
    const [lvl3, setLvl3] = useState("0")
    const [classType3, setClasstype3] = useState("barb")
    const [hp3, setHp3] = useState("10")
    const [hpLeft3, setHpLeft3] = useState("8")
    const [speed3, setSpeed3] = useState("30")
    const [ac3, setAc3] = useState("13")
    const [strTotal3, setStrTotal3] = useState("+1")
    const [dexTotal3, setDexTotal3] = useState("+1")
    const [conTotal3, setConTotal3] = useState("+1")
    const [intTotal3, setIntTotal3] = useState("+1")
    const [wisTotal3, setWisTotal3] = useState("+1")
    const [chaTotal3, setChaTotal3] = useState("+1")
    const [gold3, setChooseView3] = useState("100")
    const [playerName3, setPlayerName3] = useState("your name")
    
  
// function playerNumber(race) {
//     SetPlayers([...players, <DMPlayerCards/> ])

// }

// function changeView(props) {
//     setChooseView(props)
//     }
//     useEffect(() => {
//         if (chooseView === "dm") {
//            console.log("it worked") 
//         } 
//         if (chooseView === "p1") {
//             console.log("it worked p1") 
//          } 
//          }, [chooseView]);
    


  return (

    
    <div className=' flex flex-col h-screen w-screen bg-slate-700'>
        <Header/>
        <div className='w-full min-h-[40px] bg-red-300 flex   justify-evenly'>
            <button onClick={() => {changeView("dm")}} >DM</button>
            <button onClick={() => {changeView("p1")}} >Player 1</button>
            <button onClick={() => {changeView("p2")}} >Player 2</button>
            <button onClick={() => {playerNumber()}} > add</button>
          
        </div>

        {/* body  */}
<div className='flex overflow-auto justify-evenly flex-wrap h-full items-center' >

{/* {chooseView === "dm" ? (<DmView/>):(<></>)}
{chooseView === "p1"  ? (<PlayerView/>):(<></>)} */}

{/* {players.map((players, index) => (
                    <li key={index}>{players}</li>
                ))} */}
                
  <DMPlayerCards name={name} roll={roll} setRoll={setRoll} race={race} setRace={setRace} lvl={lvl} classType={classType} hp={hp} hpLeft={hpLeft} speed={speed} ac={ac} strTotal={strTotal} dexTotal={dexTotal} conTotal={conTotal} intTotal={intTotal} wisTotal={wisTotal} chaTotal={chaTotal} gold={gold} playerName={playerName} setName={setName} setLvl={setLvl} setClassType={setClassType} setHp={setHp} setHpLeft={setHpLeft} setSpeed={setSpeed} setAc={setAc} setStrTotal={setStrTotal} setDexTotal={setDexTotal} setConTotal={setConTotal} setIntTotal={setIntTotal} setWisTotal={setWisTotal} setChaTotal={setChaTotal} setGold={setGold} setPlayerName={setPlayerName} />
  <DMPlayerCards name={name2} lvl={lvl2} classType={classType2} hp={hp2} hpLeft={hpLeft2} speed={speed2} ac={ac2} strTotal={strTotal2} dexTotal={dexTotal2} conTotal={conTotal2} intTotal={intTotal2} wisTotal={wisTotal2} chaTotal={chaTotal2} gold={gold2} playerName={playerName2} />
  <DMPlayerCards name={name3} lvl={lvl3} classType={classType3} hp={hp3} hpLeft={hpLeft3} speed={speed3} ac={ac3} strTotal={strTotal3} dexTotal={dexTotal3} conTotal={conTotal3} intTotal={intTotal3} wisTotal={wisTotal3} chaTotal={chaTotal3} gold={gold3} playerName={playerName3} />

</div>
    </div>
  )
}
