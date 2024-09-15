import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { useAuth } from '../Components/authFunctions/AuthContext';



export default function ListItem({ id, name, description, playerData }) 
{
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("name");
  const [editedDescription, setEditedDescription] = useState("description");
  const [allData, setAllData] =useState(playerData)
  const { currentUser } = useAuth();
  const storedUserName = localStorage.getItem('ChosenCreature'); 


  const saveChanges = async () => {
    console.log("save changes ran")
    try {
      if (currentUser) {
        // Reference to the character document in Firebase
        const characterDocRef = doc(db, 'users', currentUser.uid, 'characters', storedUserName);
        await setDoc(characterDocRef, allData,  { merge: true } );
        console.log('Character data overwritten successfully!');
      } else {
        console.error('User is not authenticated');
      }
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  function changeEdit() {
    setIsEditing(!isEditing)
    // console.log(id)
    console.log(allData)
  }

  // useEffect(() => {
  //   saveChanges();
  //   console.log('useEffect ran');
  // }, []);

  function overwriteData() {
    console.log(Array.isArray(allData))
    console.log(allData)

    let newData = {id: allData.actions[0].id, description: editedDescription , action: editedName }
    allData.actions[0] = newData
    console.log(newData)

  setAllData(allData)
  console.log(allData)
  saveChanges()
 setIsEditing(!isEditing)
  }

  return (
    <div className='flex-col p-1'>
      <div className='flex w-full justify-between p-1'>
        {isEditing ? (
          <input
            type='text'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <p className='font-bold'>{name}</p>
        )}
        <div>
          <button
            onClick={() =>
              window.open(
                `https://www.google.com/search?q=d+and+d++${name}`,
                '_blank',
                'noopener,noreferrer'
              )
            }
            className='bg-slate-500'
          >
            help
          </button>
          {isEditing ? (
            <button onClick={overwriteData} className='bg-green-500'>
              save
            </button>
          ) : (
            <button onClick={changeEdit} className='bg-white'>
              edit
            </button>
          )}
        </div>
      </div>
      <div className='w-full h-fit'>
        {isEditing ? (
          <input
            type='text'
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <p className='italic'>{description}</p>
        )}
      </div>
    </div>
  );
}



