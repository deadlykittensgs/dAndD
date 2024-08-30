import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../Firebase/firebase"

export default function Login({ hasAccount, setHasAccount, setIsSigningIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);  // Successfully signed in
      })
      .then((userCredentials) => {
        console.log(userCredentials)
      })
      .catch((error) => {
        console.log('Error signing in:', error.code, error.message);  // Handle errors here
      });
  };

  return (
    <div className='w-full h-full'>
      <form onSubmit={onSubmit} className='bg-slate-300 flex w-[350px] h-[200px] shadow-md'>
        <div className='bg-slate-500 flex flex-col items-center justify-center w-[170px] h-full'>
          {/* Play Game button or link can go here */}
          <button type="submit" className='bg-slate-300 p-1 rounded mb-10'>Sign In</button>
          <p className='text-[.6rem] p-1 text-center'>
            Don't Have an Account? Click 
            <span className='text-cyan-300 bg-slate-400 p-1 rounded' onClick={() => setHasAccount(!hasAccount)}> Here</span>
          </p>
        </div>
        <div className='flex flex-col items-center justify-evenly w-full'>
          <h3 className='font-bold text-[1.5rem]'>Sign In</h3>
          <div className='flex flex-col justify-center items-center'>
            <p>Email</p>
            <input 
              type="text" 
              placeholder='email@email.com' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p>Password</p>
            <input 
              type="password"  // Changed to "password" for better security
              placeholder='XXXXXXXX' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>
      </form>
    </div>
  );
}
