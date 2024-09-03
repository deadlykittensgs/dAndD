import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../Firebase/firebase"
import { doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




export default function Login({ hasAccount, setHasAccount, }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()



    try{
   // Sign up the user
   const userCredential = await signInWithEmailAndPassword(auth, email, password);
   const user = userCredential.user;
   console.log(userCredential); 
   navigate('/CharecterSelection')
    } catch(error) {
        console.log('Error signing in:', error.code, error.message);  // Handle errors here
        setErrorMsg(error.message)
      };
  };

  return (
    <div className='w-full h-full'>
      <form onSubmit={onSubmit} className='bg-slate-300 flex w-[350px] h-[200px] shadow-md'>
        <div className='flex flex-col items-center justify-center w-full'>
          <h3 className='font-bold text-[1.5rem]'>Sign In</h3>
          <div className='flex flex-col justify-center items-center'>
            <p>Email</p>
            <input
              type="email"
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p>Password</p>
            <input
              type="password"
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='bg-slate-400 w-[100px] mt-4'>Sign in</button>
          <p className='text-red-500 italic'>{errorMsg}</p>
        </div>
      </form>
      <div className='flex justify-center mt-4'>
        <p>Don't have an account? 
          <span className=' bg-slate-200 rounded p-1 text-blue-500 cursor-pointer ml-2' onClick={() => setHasAccount(false)}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
