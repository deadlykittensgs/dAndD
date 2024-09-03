
import React, {useEffect, useState} from 'react'
import {auth} from "../../Firebase/firebase"
import { onAuthStateChanged, signOut} from 'firebase/auth'


export default function AuthDetails() {
        const [authUser, setAuthUser] = useState(null)

useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user)
        } else {
            setAuthUser(null)
        }
    })
    return () => {
        listen()
    }
},[])

const userSignOut = () => {
    signOut(auth).then( () =>{
        console.log("log out successful")
    }).catch(error => console.log(error))
}


  return (
    <div className=' flex overflow-auto text-center bg-slate-500 p-1 w-[50px]'>{authUser ? (<p>{`Signed in as ${authUser.email, authUser.uid }`} <button onClick={userSignOut} >Sign Out</button></p>) : (<p> Signed Out</p>)}</div>
  )
}
