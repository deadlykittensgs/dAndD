import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CreatedChar from '../Components/CreatedChar'

export default function CharecterSelection() {
  return (
  
    <div className='flex flex-col h-screen w-screen bg-blue-500'>
    <Header/>
    <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='bg-slate-200 h-[80%] w-[90%]'>
            <div className='flex w-full h-[70px] justify-between items-center p-4'>
                <p>Create New Character</p>
                <a href='CharacterCreation' className='bg-sky-200 p-2 rounded'>Create</a>
            </div>
            <div>
                
            </div>
            <div className='flex flex-col h-[400px] w-full overflow-y-auto'>
     
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
                <CreatedChar/>
            
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
