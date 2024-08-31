import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../Firebase/firebase"; // Adjust the import path as needed

export default function CreateAccount({ hasAccount, setHasAccount, setIsSigningIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting normally

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log('User created:', userCredentials.user);
        // Optionally, you can add any additional logic after successful creation
      })
      .catch((error) => {
        console.log('Error creating account:', error.code, error.message);
        // Optionally, handle different error codes for better UX
      });
  };

  return (
    <div className='w-full h-full'>
      <form onSubmit={onSubmit} className='bg-slate-300 flex w-[350px] h-[200px] shadow-md'>
        <div className='flex flex-col items-center justify-center w-full'>
          <h3 className='font-bold text-[1.5rem]'>Create Account</h3>
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
          <button type="submit" className='bg-slate-400 w-[100px] mt-4'>Sign Up</button>
        </div>
      </form>
      <div className='flex justify-center mt-4'>
        <p>Already have an account? 
          <span className=' bg-slate-200 rounded p-1 text-blue-500 cursor-pointer ml-2' onClick={() => setHasAccount(true)}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
