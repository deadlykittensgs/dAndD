import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'


export default function CharacterCreation() {
 
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [race, setRace] = useState('');
    const [subRace, setSubrace] = useState('');
    const [traits, setTraits] = useState('');
    const [proficiencies, setProficiencies] = useState('');
    const [cantrips, setCantrips] = useState('');
    const [abilities, setAbilities] = useState('');
    const [classType, setClassType] = useState('');
    const [lvlOneAbilities, setLvlOneAbilities] = useState('');
    const [background, setBackground] = useState('');
    const [Langues, setLangues] = useState('');
    const [startingEquipment, setStartingEquipment] = useState('');
 
 const [creatureData, setCreatureData] = useState([])
 
 


 useEffect(() => {
    // Log the state whenever it changes
    console.log(creatureData);
  }, [creatureData]);

 
const addInfoToArray = (e) => {
    e.preventDefault()
    console.log("clicked")
    let array = []
    array.push(name,level,race,subRace,traits,proficiencies,cantrips,abilities,classType,lvlOneAbilities,background,Langues,startingEquipment)
setCreatureData(array)
}




 
 
    return (
    <form onSubmit={addInfoToArray} className=' flex flex-col h-screen w-screen bg-slate-500'>
    <Header/>
<div className='flex flex-col'>
    {/* box 1 */}
<div>

</div>
<div>
    <p>Name</p>
    <input name='name' type="text"  value={name} onChange={(e) => setName(e.target.value)} />
</div>

<div>
    <p>Level</p>
    <input name='level' type="text"  value={level} onChange={(e) => setLevel(e.target.value)} />
</div>

<div>
    <p>Race</p>
    <input name='name' type="text"  value={race} onChange={(e) => setRace(e.target.value)} />
</div>

<div>
    <p>SubRace</p>
    <input name='name' type="text"  value={subRace} onChange={(e) => setSubrace(e.target.value)} />
</div>

<div> 
    <p>Traits</p>
    <input name='name' type="text"  value={traits} onChange={(e) => setTraits(e.target.value)} />
</div>


<div>
    <p>Proficiencies</p>
    <input name='name' type="text"  value={proficiencies} onChange={(e) => setProficiencies(e.target.value)} />
</div>

<div>
    <p>Cantrips</p>
    <input name='name' type="text"  value={cantrips} onChange={(e) => setCantrips(e.target.value)}/>
</div>

<div>
    <p>Abilities</p>
    <input name='name' type="text"  value={abilities} onChange={(e) => setAbilities(e.target.value)} />
</div>


<div> 
    <p>Class</p>
    <input name='name' type="text"  value={classType} onChange={(e) => setClassType(e.target.value)} />
</div>


<div>
    <p>lvl 1 abilities</p>
    <input name='name' type="text"  value={lvlOneAbilities} onChange={(e) => setLvlOneAbilities(e.target.value)} />
</div>

<div> add ability scores</div>



<div>
    <p>Background</p>
    <input name='name' type="text"  value={background} onChange={(e) => setBackground(e.target.value)} />
</div>

<div>
    <p>Langues</p>
    <p><input name='name' type="text"  value={Langues} onChange={(e) => setLangues(e.target.value)}/></p>
</div>

<div>
    <div className='flex items-center text-center gap-2'>
    <p>Starting Equipment </p>
    <p className='text-[.7rem]'>(Must be less than strength X15)</p>
    </div>
  <input name='name' type="text"  value={startingEquipment} onChange={(e) => setStartingEquipment(e.target.value)} />
</div>

<div>currency</div>


<button className='bg-sky-300 w-20 rounded p1'>create</button>





</div>
    </form>
  )
}
