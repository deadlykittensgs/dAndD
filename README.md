live -https://calm-pastelito-58db04.netlify.app


Home Page -
accept input data
redirect to character selection


Character Selection -

check user profile and update a list of created characters
enable an add and delete function to the list with correctly formatted character info 
pass this info to the next page to display it in an easy to read way 


Play Game -

show the stats imported form Char select and allow edits directly to the firebase DB
retrieve the data from firebase db using the character unique id 







import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
// import { db } from '../Firebase/firebase';
// import { useAuth } from '../Components/authFunctions/AuthContext';

// export default function ListItem({ id, name, description, playerData }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedName, setEditedName] = useState(name);  // Initialize with actual name
//   const [editedDescription, setEditedDescription] = useState(description);  // Initialize with actual description
//   const [allData, setAllData] = useState(playerData || {});  // Default to empty object if playerData is undefined
//   const { currentUser } = useAuth();
//   const storedUserName = localStorage.getItem('ChosenCreature');

//   useEffect(() => {
//     // Fetch user data if storedUserName and currentUser are available
//     if (currentUser && storedUserName) {
//       fetchUserDataByName();
//     }
//   }, [currentUser, storedUserName]);

//   const fetchUserDataByName = async () => {
//     console.log('Fetching user data...');
//     try {
//       const usersRef = collection(db, 'users', currentUser.uid, 'characters');
//       const usersSnapshot = await getDocs(usersRef);
//       const fetchedData = usersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       console.log('Fetched data:', fetchedData);

//       // Find and set the specific character based on storedUserName
//       const character = fetchedData.find(item => item.id === storedUserName);
//       setAllData(character || {});
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const saveChanges = async () => {
//     console.log('saveChanges ran');
//     try {
//       if (currentUser) {
//         // Reference to the character document in Firebase
//         const characterDocRef = doc(db, 'users', currentUser.uid, 'characters', storedUserName);
//         await setDoc(characterDocRef, allData, { merge: true });
//         console.log('Character data overwritten successfully!');
//       } else {
//         console.error('User is not authenticated');
//       }
//     } catch (error) {
//       console.error('Error updating character:', error);
//     }
//   };

//   function changeEdit() {
//     setIsEditing(!isEditing);
//   }

//   function overwriteData() {
//     console.log('overwriteData ran');
//     console.log(Array.isArray(allData.actions));  // Check if actions is an array
//     console.log(allData);

//     if (Array.isArray(allData.actions) && allData.actions.length > 0) {
//       let newData = { id: allData.actions[0].id, description: editedDescription, action: editedName };
//       allData.actions[0] = newData;
//       setAllData({ ...allData, actions: [...allData.actions] });  // Create a new object reference
//       console.log(newData);

//       saveChanges();
//       setIsEditing(false);  // Stop editing
//     } else {
//       console.error('Actions is not an array or is empty.');
//     }
//   }

//   return (
//     <div className='flex-col p-1'>
//       <div className='flex w-full justify-between p-1'>
//         {isEditing ? (
//           <input
//             type='text'
//             value={editedName}
//             onChange={(e) => setEditedName(e.target.value)}
//           />
//         ) : (
//           <p className='font-bold'>{name}</p>
//         )}
//         <div>
//           <button
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/search?q=d+and+d++${name}`,
//                 '_blank',
//                 'noopener,noreferrer'
//               )
//             }
//             className='bg-slate-500'
//           >
//             help
//           </button>
//           {isEditing ? (
//             <button onClick={overwriteData} className='bg-green-500'>
//               save
//             </button>
//           ) : (
//             <button onClick={changeEdit} className='bg-white'>
//               edit
//             </button>
//           )}
//         </div>
//       </div>
//       <div className='w-full h-fit'>
//         {isEditing ? (
//           <input
//             type='text'
//             value={editedDescription}
//             onChange={(e) => setEditedDescription(e.target.value)}
//           />
//         ) : (
//           <p className='italic'>{description}</p>
//         )}
//       </div>
//     </div>
//   );
// }
























  const playerObject = {
    name: 'object player',
    lvl: 0,
    roll: 0,
    race: 'Gnome',
    classType: 'bard',
    hp: 10,
    hpLeft: 10,
    speed: 30,
    ac: 13,
    strTotal: '+1',
    dexTotal: '+1',
    conTotal: '+1',
    intTotal: '+1',
    wisTotal: '+1',
    chaTotal: '+1',
    strTotalNumber: 10,
    dexTotalNumber: 15,
    conTotalNumber: 14,
    intTotalNumber: 16,
    wisTotalNumber: 12,
    chaTotalNumber: 8,
    gold: 10,
    playerName: 'yourName',
    background: 'folk Hero',
    size: 'medium',
    alignment: 'NG',
    initiative: '+3',
    deathSaves: 0,
    actions: [
      { id: 100, action: 'Swing Sword', description: 'Swing a sword for x dmg' },
      { id: 200, action: 'Swing ax', description: 'Swing a ax for x dmg' },
      { id: 300, action: 'Shoot Bow', description: 'Shoot bow for x dmg' },
    ],
    savingThrows: [0, 0, 0, 0, 0, 0],
    SelectedSavingThrows: ['yes', 'no', 'no', 'no', 'no', 'no'],
    skills: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    selectedSkills: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    toolProficiencie: ['tool 1', 'tool 2', 'tool 3'],
    abilities: [
      { id: 400, action: 'dark Vision', description: 'see in the dark 60 ft' },
      { id: 500, action: 'trance', description: 'sleep shorter' },
      { id: 600, action: 'Fay Ancestory', description: 'Resist charms' },
    ],
    inventory: ['thing 1', 'thing 2', 'thing 3'],
    notes: ['note 1', 'note 2', 'note 3'],
    languages: ['language 1', 'language 2', 'language 3'],
  };




  import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CreatedChar from '../Components/CreatedChar';
import BuildNewPlayer from '../Components/buildNewPlayer';
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'; // Import getDoc to fetch individual documents
import { db } from '../Firebase/firebase';
import { useAuth } from '../Components/authFunctions/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function CharacterSelection() {
  const playerObject = {
    // Your initial playerObject structure...
  };

  const [divs, setDivs] = useState([]);
  const [build, setBuild] = useState(true);
  const [dmView, setDmView] = useState([]);
  const [playerObjectState, setPlayerObjectState] = useState(playerObject);
  const [firebaseInfo, setFirebaseInfo] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to get all characters info
  const fetchWords = async () => {
    try {
      if (currentUser) {
        const querySnapshot = await getDocs(collection(db, 'users', currentUser.uid, 'characters'));
        const wordsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFirebaseInfo(wordsArray);
      }
    } catch (e) {
      console.error('Error fetching documents: ', e);
    }
  };

  // Fetch data when component mounts or currentUser changes
  useEffect(() => {
    fetchWords();
  }, [currentUser]);

  // Function to fetch a specific character's data and navigate to the playgame page
  const selectPlayer = async (id) => {
    try {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid, 'characters', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const characterData = docSnap.data();
          console.log('Character data:', characterData);

          // Navigate to /playgame with the character data
          navigate('/playgame', { state: { characterData } });
        } else {
          console.log('No such document!');
        }
      }
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  const pushToDB = async (object) => {
    // Your pushToDB function implementation...
  };

  const handleDelete = async (id) => {
    // Your handleDelete function implementation...
  };

  function addCharacter(name, lvl, classType, race) {
    // Your addCharacter function implementation...
  }

  return (
    <div className="flex flex-col h-[700px] w-screen bg-blue-500">
      <Header />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="bg-slate-200 h-[500px] w-[90%]">
          <div className="flex w-full h-[70px] overflow-auto justify-between items-center p-4">
            <p>Create New Character</p>
            <div className='flex gap-1'>
              <button onClick={() => { window.location.reload() }} className="bg-sky-200 p-2 rounded"><i className="fa-solid fa-arrows-rotate"></i></button>
              <button
                onClick={() => {
                  setBuild(!build);
                }}
                className="bg-sky-200 p-2 rounded"
              >
                {build ? <i className="fa-solid fa-user-plus"></i> : <i className="fa-solid fa-ban"></i>}
              </button>
            </div>
          </div>
          {/* this swaps between the player build option and the players built option */}
          <div className="flex flex-col h-[400px] w-full overflow-y-auto">
            {build ? (
              divs
            ) : (
              <BuildNewPlayer
                key={build.length}
                build={build}
                setBuild={setBuild}
                pushToDB={pushToDB}
                playerObjectState={playerObjectState}
                setPlayerObjectState={setPlayerObjectState}
              />
            )}
            <div className="flex items-center justify-center">
              {build ? (
                <div>
                  {/* Map through firebaseInfo to display characters */}
                  <div>
                    {firebaseInfo.map((char) => (
                      <CreatedChar
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        lvl={char.lvl}
                        classType={char.classType}
                        race={char.race}
                        handleDelete={handleDelete}
                        selectPlayer={() => selectPlayer(char.id)} // Pass selectPlayer with character ID
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {true === true ? <p></p> : <PlayGame dmView={dmView} setDmView={setDmView} />}
      <Footer />
    </div>
  );
}
