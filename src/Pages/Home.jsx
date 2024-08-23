import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Home() {

    const [count, setCount] = useState(0);

function rollDice(min, max) {
    let roll = Math.floor(Math.random() * (max - min + 1)) + min;
    setCount(roll)
}



  return (


    <div className='flex flex-col h-screen w-screen bg'>
<Header/>

{/* body  */}
<div className='flex flex-1 flex-col items-center justify-evenly '>

    {/* box 1  */}
    <div className='bg-slate-300 flex w-[350px] h-[200px]' >
        <div className='bg-slate-500 flex items-center justify-center w-[170px] h-full' >
           <a  href='CharecterSelection' >Play Game</a>
            </div>
        <div className='flex flex-col items-center justify-evenly w-full'>
            <h3 className='font-bold text-[1.5rem]' >Sign In</h3>
            <div className='flex flex-col justify-center items-center'>
                <p>Email</p>
                <input type="text" name="" id="" />
            </div>
             
             <div  className='flex flex-col justify-center items-center'>
                <p>Password</p>
                <input type="text" name="" id="" />
             </div>
        </div>
    </div>



{/* box 2  */}
    <div className=' flex bg-slate-500 w-[350px] h-[200px]'  >

<div className='flex flex-1 justify-center'>
    <div className='flex flex-col flex-1 bg-slate-300 w-[100%]' >
        <h2 className='flex justify-center items-center bg-slate-600 text-white h-[90px]'>Die Roll</h2>
        <div className='flex justify-center items-center h-full w-full'>
            {count}
        </div>
    </div>
</div>
{/* rolls  */}
<div className='flex flex-1 justify-center items-center ' >
    <div className='flex flex-col'>
        <button onClick={() => {rollDice(0, 2)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300'>2</button>
        <button onClick={() => {rollDice(0, 4)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 '  >4</button>
        <button onClick={() => {rollDice(0, 6)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >6</button>
        <button onClick={() => {rollDice(0, 8)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >8</button>
        <button onClick={() => {rollDice(0, 10)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >10</button>
        <button onClick={() => {rollDice(0, 20)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >20</button>
    </div>
</div>

    </div>

</div>
<Footer/>


    </div>
  )
}
