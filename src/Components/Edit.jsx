import React from 'react'

export default function Edit({toggle, setName, race, setRace, setLvl, setClassType, setHp, setHpLeft, setSpeed, setAc, setStrTotal, setDexTotal, setConTotal, setIntTotal, setWisTotal, setChaTotal, setGold, setPlayerName,name, lvl, classType, hp, hpLeft,  speed,  ac, strTotal,  dexTotal, conTotal, intTotal, wisTotal, chaTotal, gold, playerName }) {


const submit= (e) => { 
    e.preventDefault()
 
}


  return (
    <form onSubmit={submit}  className=' overflow-auto w-[250px] h-[300px] bg-sky-300 m-1'> 
<div className='flex  flex-col' >
    <div className='flex flex-col items-center'>
      <div className='flex justify-between w-full p-2'> <button className='bg-slate-300 w-6 h-6 rounded-full'>?</button> <p>Name</p> <button onClick={toggle} className='bg-red-400 w-6 h-6 rounded-full'>X</button></div>
     <input className='w-full text-center' name='name' value={name} type="text" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>class</p>
        <input className='w-full text-center'  name='name' value={classType} type="text" onChange={(e) => setClassType(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Race</p>
        <input className='w-full text-center'  name='name' value={race} type="text" onChange={(e) => setRace(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>lvl</p>
        <input className='w-full text-center' name='name' value={lvl} type="number" onChange={(e) => setLvl(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>HP</p>
        <input className='w-full text-center' name='name' value={hpLeft} type="number" onChange={(e) => setHpLeft(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Total Hp</p>
        <input className='w-full text-center' name='name' value={hp} type="number" onChange={(e) => setHp(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Speed</p>
        <input className='w-full text-center' name='name' value={speed} type="number" onChange={(e) => setSpeed(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Armor Class</p>
        <input className='w-full text-center' name='name' value={ac} type="number" onChange={(e) => setAc(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Strength</p>
        <input className='w-full text-center' name='name' value={strTotal} type="text" onChange={(e) => setStrTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Dexterity</p>
        <input className='w-full text-center' name='name' value={dexTotal} type="text" onChange={(e) => setDexTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Constitution</p>
        <input className='w-full text-center' name='name' value={conTotal} type="text" onChange={(e) => setConTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Intelligence</p>
        <input className='w-full text-center' name='name' value={intTotal} type="text" onChange={(e) => setIntTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Wisdom</p>
        <input className='w-full text-center' name='name' value={wisTotal} type="text" onChange={(e) => setWisTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Charisma</p>
        <input className='w-full text-center' name='name' value={chaTotal} type="text" onChange={(e) => setChaTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Intelligence</p>
        <input className='w-full text-center' name='name' value={intTotal} type="text" onChange={(e) => setIntTotal(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Gold</p>
        <input className='w-full text-center' name='name' value={gold} type="number" onChange={(e) => setGold(e.target.value)} />
    </div>
    <div className='flex flex-col items-center'>
        <p>Your Name</p>
        <input className='w-full text-center' name='name' value={playerName} type="text" onChange={(e) => setPlayerName(e.target.value)} />
    </div>
    <div className='flex p-5 items-center justify-center'>
    <button className='flex justify-center p-1 w-[50%] rounded text-center bg-slate-200' onClick={toggle}>Submit</button>
    </div>

</div>




  

    </form>
  )
}
