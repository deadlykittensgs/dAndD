import React from 'react'
import { useEffect } from 'react';




export default function BuildNewPlayer({playerObjectState, setPlayerObjectState, pushToDB, build, setBuild }) {


    const {name, roll, lvl, race, classType, hp, hpLeft, speed, ac, strTotal, dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName,background, size, alignment, initiative, deathSaves, actions, savingThrows, skills, toolProficiencie, abilities, inventory, notes, languages, strTotalNumber, dexTotalNumber, conTotalNumber, intTotalNumber, wisTotalNumber, chaTotalNumber, } = playerObjectState

    const classOptions = ["Barbarian","Bard","Cleric","Druid", "Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard","Artificer", "Blood Hunter","-Other-"];
    const levelOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const dndRaces = [ "Dragonborn","Dwarf","Elf","Gnome","Half-Elf", "Halfling", "Half-Orc","Human", "Tiefling", "Aarakocra","Genasi","Goliath","Aasimar","Bugbear","Firbolg","Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi","Triton","Yuan-ti Pureblood","Gith", "Eladrin", "Shadar-Kai", "Changeling", "Kalashtar","Orc of Eberron","Shifter","Warforged", "Centaur", "Minotaur", "Satyr","Triton of Theros","Pallid Elf", "Sea Elf", "Tortle","Dhampir", "Hexblood", "Reborn","Centaur of Ravnica","Loxodon","Simic Hybrid","Vedalken","Fairy","Harengon","Owlin","Verdan","Grung", "Automaton", "Eidolon", "Soulless", "Tiefling Variant", "Aetherborn","Khenra", "Naga", "Reborn"];
    const danddsize =["Tiny","small","Medium","Large","Huge",]
    const danddAlignment =["LG","NG","CG","LN","N","CN","LE","NE","CE"]
   
    const addInfoToArray = (e) => {
        e.preventDefault()
        pushToDB(playerObjectState)
        setPlayerObjectState([])
        setBuild(!build)

    }
    

  return (
    <form onSubmit={addInfoToArray} className=' flex flex-col h-fit overflow-auto w-[100%] bg-slate-500 mb-[40px]'>

<div className='flex flex-col p-4'>
    {/* box 1 */}
<div>

</div>

<div>
    <p >Your Real Name</p>
    <input type="text"  value={playerName} onChange={(e) => setPlayerObjectState({...playerObjectState, playerName: e.target.value})}/>
</div>

<div>
    <p>Name</p>
    <input  type="text"  value={name} onChange={(e) => setPlayerObjectState({...playerObjectState, name: e.target.value})}/>
</div>

<div>
    <p>Class</p>
    <select id="select" value={classType} onChange={(e) => setPlayerObjectState({...playerObjectState, classType: e.target.value})}>
        {/* Dynamically generate options from the array */}
        {classOptions.map((classOptions, index) => (
          <option key={index} value={classOptions}>
            {classOptions}
          </option>
        ))}
      </select>
      <button onClick={() => {  window.open(`https://www.dndbeyond.com/classes`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Level</p>
    <select id="select" value={lvl} onChange={(e) => setPlayerObjectState({...playerObjectState, lvl: e.target.value})}>
        {/* Dynamically generate options from the array */}
        {levelOptions.map((levelOptions, index) => (
          <option key={index} value={levelOptions}>
            {levelOptions}
          </option>
        ))}
      </select>
</div>

<div>
    <p>Background</p>
    <input name='name' type="text"  value={background} onChange={(e) => setPlayerObjectState({...playerObjectState, background: e.target.value})}/>
    <button onClick={() => {  window.open(`https://blackcitadelrpg.com/list-of-backgrounds-5e`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Race</p>
    <select id="select" value={race} onChange={(e) => setPlayerObjectState({...playerObjectState, race: e.target.value})}>
        {/* Dynamically generate options from the array */}
        {dndRaces.map((dndRaces, index) => (
          <option key={index} value={dndRaces}>
            {dndRaces}
          </option>
        ))}
      </select>
</div>

<div>
    <p>Size</p>
    <select id="select" value={size} onChange={(e) => setPlayerObjectState({...playerObjectState, size: e.target.value})}>
        {/* Dynamically generate options from the array */}
        {danddsize.map((danddsize, index) => (
          <option key={index} value={danddsize}>
            {danddsize}
          </option>
        ))}
      </select>
</div>

<div>
    <p>Alignment</p>
    <select id="select" value={alignment} onChange={(e) => setPlayerObjectState({...playerObjectState, alignment: e.target.value})}>
        {/* Dynamically generate options from the array */}
        {danddAlignment.map((danddAlignment, index) => (
          <option key={index} value={danddAlignment}>
            {danddAlignment}
          </option>
        ))}
      </select>
    <button onClick={() => {  window.open(`https://blackcitadelrpg.com/alignment-dnd-5e/`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Armor Class (base armor + Dex modifier) </p>
    <input name='name' type="text"  value={ac} onChange={(e) => setPlayerObjectState({...playerObjectState, ac: e.target.value})}/>
    <button onClick={() => {  window.open(`https://blackcitadelrpg.com/armor-class-5e/#How_to_Calculate_Armor_Class_in_DnD_5e`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Initiative (Dex modifier) </p>
    <input name='name' type="text"  value={initiative} onChange={(e) => setPlayerObjectState({...playerObjectState, initiative: e.target.value})}/>
    <button onClick={() => {  window.open(`https://blackcitadelrpg.com/initiative-bonus-5e/`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Speed</p>
    <input name='name' type="text"  value={speed} onChange={(e) => setPlayerObjectState({...playerObjectState, speed: e.target.value})}/>
    <button onClick={() => {  window.open(`https://www.google.com/search?q=d+and+d+${classType}+movement+speed+e5`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Current Max Health</p>
    <input name='name' type="text"  value={hp} onChange={(e) => setPlayerObjectState({...playerObjectState, hp: e.target.value})}/>
    <button onClick={() => {  window.open(`https://www.google.com/search?q=d+and+d+class+${classType}+starting+hp+5e`, '_blank', 'noopener,noreferrer');}}>help</button>
</div>

<div>
    <p>Current Health</p>
    <input name='name' type="text"  value={hpLeft} onChange={(e) => setPlayerObjectState({...playerObjectState, hpLeft: e.target.value})}/>
</div>


<div>
    <p>Hit Dice</p>
    <input name='name' type="text"  value={name} onChange={(e) => setPlayerObjectState({...playerObjectState, name: e.target.value})}/>
</div>

<div>
    <p>Death Saves Used</p>
    <input name='name' type="text"  value={deathSaves} onChange={(e) => setPlayerObjectState({...playerObjectState, deathSaves: e.target.value})}/>
</div>

      <div className='bg-slate-200 flex flex-col text-center items-center justify-center my-3'> 
      <p>Use <span className='bold text-red-400'>ONE</span> of each of these numbers in the next 6 options</p>
      <p className='font-bold'>15,14,13,12,10,8</p>
      </div>  
<div>
    <p>Strength</p>
    <input name='name' type="text"  value={strTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, strTotalNumber: e.target.value})}/>
</div>
<div>
    <p>Dexterity</p>
    <input name='name' type="text"  value={dexTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, dexTotalNumber: e.target.value})}/>
</div>
<div>
    <p>Constitution</p>
    <input name='name' type="text"  value={conTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, conTotalNumber: e.target.value})}/>
</div>
<div>
    <p>Inelegance</p>
    <input name='name' type="text"  value={intTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, intTotal: e.target.value})}/>
</div>

<div>
    <p>Wisdom</p>
    <input name='name' type="text"  value={wisTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, wisTotalNumber: e.target.value})}/>
</div>

<div>
    <p>Charisma</p>
    <input name='name' type="text"  value={chaTotalNumber} onChange={(e) => setPlayerObjectState({...playerObjectState, chaTotal: e.target.value})}/>
</div>

<div>
    <p>Gold (50Gp is standard) </p> 
    <input name='name' type="text"  value={gold} onChange={(e) => setPlayerObjectState({...playerObjectState, Gold: e.target.value})}/>
</div>

<button className='bg-slate-400 '>Finish</button>

</div>
    </form>
    
  )
        }