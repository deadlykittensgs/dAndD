import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../Firebase/firebase"
import { doc, setDoc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';


export default function CreateAccount({ hasAccount, setHasAccount, setIsSigningIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a new document for the user in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        displayName: user.displayName || '',
        // Add any other user fields you want to save
      });
      navigate('/CharecterSelection')
      console.log('New user document created in Firestore');
      console.log(userCredential);

    } catch (error) {
      console.log('Error signing up:', error.code, error.message);
      setErrorMsg(error.message)
    }
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
          <p className='text-red-500 italic'>{errorMsg}</p>
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
