import React, {useState, useEffect} from 'react'
import Stats from '../Components/Stats'
import Edit from '../Components/Edit'


export default function DMPlayerCards({name, roll, race,setRace, setRoll, lvl, classType, hp, hpLeft,  speed,  ac, strTotal,  dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName,setName, setLvl, setClassType, setHp, setHpLeft, setSpeed, setAc, setStrTotal, setDexTotal, setConTotal, setIntTotal, setWisTotal, setChaTotal, setGold, setPlayerName} ) {
  
  
 const [isToggled, setIsToggled] = useState(true);
  

const toggle = () => {
  setIsToggled(!isToggled); // Toggle between true and false
  console.log(isToggled)
};


  return (
    <div>
      {isToggled ? <Stats race={race} setRace={setRace} setHpLeft={setHpLeft} roll={roll} setRoll={setRoll} toggle={toggle} name={name} lvl={lvl} classType={classType}  hp={hp} hpLeft={hpLeft} speed={speed} ac={ac} strTotal={strTotal} dexTotal={dexTotal} conTotal={conTotal} intTotal={intTotal} wisTotal={wisTotal} chaTotal={chaTotal} gold={gold} playerName={playerName}/> : <Edit toggle={toggle} setName={setName} setLvl={setLvl} setClassType={setClassType} setHp={setHp} setHpLeft={setHpLeft} setSpeed={setSpeed} setAc={setAc} setStrTotal={setStrTotal} setDexTotal={setDexTotal} setConTotal={setConTotal} setIntTotal={setIntTotal} setWisTotal={setWisTotal} setChaTotal={setChaTotal} setGold={setGold} setPlayerName={setPlayerName} name={name} lvl={lvl} classType={classType}  hp={hp} hpLeft={hpLeft} speed={speed} ac={ac} strTotal={strTotal} dexTotal={dexTotal} conTotal={conTotal} intTotal={intTotal} wisTotal={wisTotal} chaTotal={chaTotal} gold={gold} playerName={playerName} race={race} setRace={setRace}   />}
    </div>
  )

}

