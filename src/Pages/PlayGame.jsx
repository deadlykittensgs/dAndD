import React, { useState, useEffect }  from 'react'
import Header from '../Components/Header'
import Player2 from '../Components/Player2'
import Player2ex from '../Components/Player2ex'
import CharecterSelection from './CharecterSelection'


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
        gold: 50,
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
   

 

    const [playerTwoData, setPlayerTwoData] = useState(PlayerTwo)




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
        {/* body  */}
<div className='flex overflow-auto justify-center flex-wrap h-full items-center' >
 <Player2ex playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData} />

</div>
    </div>
  )
}
