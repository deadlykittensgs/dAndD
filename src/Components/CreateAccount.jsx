import React, {useState} from 'react'
import { useAuth } from '../contexts/authContext/Index'
import { doCreateUserWithEmailAndPassword } from '../Firebase/auth'


export default function CreateAccount( { hasAccount, setHasAccount, setIsSigningIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



const onSubmit = async (e) => {
  e.preventDefault()
    setIsSigningIn(false)
    doCreateUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials)
    })
    .catch((error) => {
      console.log('Error signing in:', error.code, error.message);  // Handle errors here
    });
    

}




  return (
    <div className='w-full h-full shadow-xl'>
         <form onSubmit={() => {onSubmit()}} className='bg-slate-400 flex w-[350px] h-[200px] ' >
        <div className='bg-slate-500 flex flex-col items-center justify-center w-[170px] h-full' >
           {/* <a  href='CharecterSelection' >Play Game</a> */}
           <button className='bg-slate-300 p-1 rounded mb-10 shadow-xl'>Sign In </button>
           <p className='text-[.6rem] p-1 text-center'>Already Have an Account? click <span className='text-cyan-300 bg-slate-400 p-1 rounded' onClick={ () =>{setHasAccount(!hasAccount)}}>Here</span></p>
            </div>
        <div className='flex flex-col items-center justify-evenly w-full'>
            <h3 className='font-bold text-[1.5rem]' >Create Account</h3>
            <div className='flex flex-col justify-center items-center'>
                <p>Email</p>
                <input type="text" placeholder='email@email.com'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
             
             <div  className='flex flex-col justify-center items-center'>
                <p>Password</p>
                <input type="text" placeholder='XXXXXXXX'  value={password} onChange={(e) => setPassword(e.target.value)}/>
             </div>
        </div>
    </form>
    </div>
  )
}