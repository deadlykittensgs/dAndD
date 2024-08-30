import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { doSignInWithEmailAndPassword } from '../Firebase/auth';
import { useAuth } from '../contexts/authContext/Index';
import CreateAccount from '../Components/CreateAccount'
import Login from '../Components/Login';

  



export default function Home() {


    // sign in 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [hasAccount, setHasAccount] = useState(true)


    const [count, setCount] = useState(0);
   
    // const { userLoggedIn } = useAuth()

function rollDice(min, max) {
    let roll = Math.floor(Math.random() * (max - min + 1)) + min;
    setCount(roll)
}

const onSubmit = async (e) => {
    e.preventDefault()
  if (!isSigningIn) {
    setIsSigningIn(true)
    await doSignInWithEmailAndPassword(email, password)
  }
}

  return (


    <div className='flex flex-col h-screen w-screen bg'>
<Header/>

{/* body  */}
<div className='flex flex-1 flex-col items-center justify-evenly '>

    {/* box 1 log in */}
    <div className='bg-slate-300 flex w-[350px] h-[200px]' >
        {hasAccount ? (  <Login setIsSigningIn={setIsSigningIn} hasAccount={hasAccount} setHasAccount={setHasAccount} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>):(<CreateAccount setIsSigningIn={setIsSigningIn} hasAccount={hasAccount} setHasAccount={setHasAccount} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>)}
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
        <button onClick={() => {rollDice(1, 2)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300'>2</button>
        <button onClick={() => {rollDice(1, 4)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 '  >4</button>
        <button onClick={() => {rollDice(1, 6)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >6</button>
        <button onClick={() => {rollDice(1, 8)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >8</button>
        <button onClick={() => {rollDice(1, 10)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >10</button>
        <button onClick={() => {rollDice(1, 20)}} className='bg-slate-300 w-[80px] border border-4 hover:bg-red-300 ' >20</button>
    </div>
</div>

    </div>

</div>
<Footer/>


    </div>
  )
}
