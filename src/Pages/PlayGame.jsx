import React, { useState, useEffect }  from 'react'
import Header from '../Components/Header'
import DMPlayerCards from '../Components/DMPlayerCards'
import Player2 from '../Components/Player2'
import Player3 from '../Components/Player3'
import Player4 from '../Components/Player4'
import Player5 from '../Components/Player5'
import Player6 from '../Components/Player6'
import Player2ex from '../Components/Player2ex'


export default function PlayGame() {
 // page 
    const [chooseView, setChooseView] = useState("p2")
// player 1 
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

    const PlayerTwo = {
        name:'Player 2',
        lvl: 0,
        roll: 0,
        race: "Gnome", 
        classType: "bard",
        hp: 10, 
        hpLeft: 10,
        speed: 30,
        ac: 13,
        strTotal: "+1",
        dexTotal: "+1",
        conTotal: "+1",
        intTotal: "+1",
        wisTotal: "+1", 
        chaTotal: "+1",
        strTotalNumber: 10,
        dexTotalNumber: 15,
        conTotalNumber: 14,
        intTotalNumber: 16,
        wisTotalNumber: 12, 
        chaTotalNumber: 8,
        gold: gold,
        playerName: "yourName",
        background: "folk Hero",
        size: "medium",
        alignment: "NG",
        initiative: "+3",
        deathSaves: 0,
        actions: [{id: 100, action: "Swing Sword", description: "Swing a sword for x dmg"},{id: 200, action: "Swing ax", description: "Swing a ax for x dmg"},{id: 300, action: "Shoot Bow", description: "Shoot bow for x dmg"}],
        savingThrows:[0,0,0,0,0,0],
        SelectedSavingThrows:["yes","no","no","no","no","no"],
        skills:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        selectedSkills:["yes","no","no","no","no","no","no","no","no","no","no","no","no","no","no","no","no","no"],
        toolProficiencie: ["tool 1","tool 2", "tool 3"],
        abilities: [{id: 400, action: "dark Vision", description: "see in the dark 60 ft"},{id: 500, action: "trance", description: "sleep shorter"},{id: 600, action: "Fay Ancestory", description: "Resist charms"}],
        inventory: ["thing 1","thing 2", "thing 3"],
        notes: ["note 1","note 2", "note 3"],
        languages: ["language 1","language 2", "language 3"],
    



    }
    const PlayerThree = {
        name:'Player 3',
        lvl: 0,
        roll: 0,
        race: "Human", 
        classType: "wizard",
        hp: 10, 
        hpLeft: 10,
        speed: 30,
        ac: 13,
        strTotal: "+1",
        dexTotal: "+1",
        conTotal: "+1",
        intTotal: "+1",
        wisTotal: "+1", 
        chaTotal: "+1",
        gold: gold,
        playerName: "yourName"
    }
    const PlayerFour = {
        name:'Player 4',
        lvl: 0,
        roll: 0,
        race: "Human", 
        classType: "wizard",
        hp: 10, 
        hpLeft: 10,
        speed: 30,
        ac: 13,
        strTotal: "+1",
        dexTotal: "+1",
        conTotal: "+1",
        intTotal: "+1",
        wisTotal: "+1", 
        chaTotal: "+1",
        gold: gold,
        playerName: "yourName"
    }
    const PlayerFive = {
        name:'Player 5',
        lvl: 0,
        roll: 0,
        race: "Human", 
        classType: "wizard",
        hp: 10, 
        hpLeft: 10,
        speed: 30,
        ac: 13,
        strTotal: "+1",
        dexTotal: "+1",
        conTotal: "+1",
        intTotal: "+1",
        wisTotal: "+1", 
        chaTotal: "+1",
        gold: gold,
        playerName: "yourName"
    }
    const PlayerSix = {
        name:'Player 6',
        lvl: 0,
        roll: 0,
        race: "Human", 
        classType: "wizard",
        hp: 10, 
        hpLeft: 10,
        speed: 30,
        ac: 13,
        strTotal: "+1",
        dexTotal: "+1",
        conTotal: "+1",
        intTotal: "+1",
        wisTotal: "+1", 
        chaTotal: "+1",
        gold: gold,
        playerName: "yourName"
    }

    const [playerTwoData, setPlayerTwoData] = useState(PlayerTwo)
    const [playerThreeData, setPlayerThreeData] = useState(PlayerThree)
    const [playerFourData, setPlayerFourData] = useState(PlayerFour)
    const [playerFiveData, setPlayerFiveData] = useState(PlayerFive)
    const [playerSixData, setPlayerSixData] = useState(PlayerSix)


function changeView(props) {
    setChooseView(props)
    }
    useEffect(() => {
        if (chooseView === "dm") {
           console.log("it worked") 
        } 
        if (chooseView === "p1") {
            console.log("it worked p1") 
         } 
         }, [chooseView]);
    


  return (

    
    <div className=' flex flex-col  h-screen w-screen bg'>
        <Header/>
        <div className='w-full min-h-[40px] bg-red-300 flex   justify-evenly'>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("dm")}} >DM</button>
            <button className='bg-slate-200 rounded-full p-2'onClick={() => {changeView("p1")}} >P1</button>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("p2")}} >P2</button>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("p3")}} >P3</button>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("p4")}} >P4</button>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("p5")}} >P5</button>
            <button className='bg-slate-200 rounded-full p-2' onClick={() => {changeView("p6")}} >P6</button>
        
          
        </div>

        {/* body  */}
<div className='flex overflow-auto justify-center flex-wrap h-full items-center' >

{/* dm view  */}
    {chooseView === "dm" ? <div className='flex overflow-auto justify-evenly flex-wrap h-full items-center' > 
  <DMPlayerCards name={name} roll={roll} setRoll={setRoll} race={race} setRace={setRace} lvl={lvl} classType={classType} hp={hp} hpLeft={hpLeft} speed={speed} ac={ac} strTotal={strTotal} dexTotal={dexTotal} conTotal={conTotal} intTotal={intTotal} wisTotal={wisTotal} chaTotal={chaTotal} gold={gold} playerName={playerName} setName={setName} setLvl={setLvl} setClassType={setClassType} setHp={setHp} setHpLeft={setHpLeft} setSpeed={setSpeed} setAc={setAc} setStrTotal={setStrTotal} setDexTotal={setDexTotal} setConTotal={setConTotal} setIntTotal={setIntTotal} setWisTotal={setWisTotal} setChaTotal={setChaTotal} setGold={setGold} setPlayerName={setPlayerName} />
  <Player2 playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} ></Player2>
  <Player3 playerThreeData={playerThreeData} setPlayerThreeData={setPlayerThreeData} />
  <Player4 playerFourData={playerFourData} setPlayerFourData={setPlayerFourData} />
  <Player5 playerFiveData={playerFiveData} setPlayerFiveData={setPlayerFiveData} />
  <Player6 playerSixData={playerSixData} setPlayerSixData={setPlayerSixData} /></div> : <></> } 


{/* player view  */}

{chooseView === "p2" ? <Player2ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />  : <p></p>}
{chooseView === "p3" ? <Player3ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />  : <p></p>}
{chooseView === "p4" ? <Player4ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />  : <p></p>}
{chooseView === "p5" ? <Player5ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />  : <p></p>}
{chooseView === "p6" ? <Player6ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />  : <p></p>}
</div>
    </div>
  )
}
