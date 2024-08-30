import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CreatedChar from '../Components/CreatedChar';
import PlayGame from './PlayGame';
import BuildNewPlayer from '../Components/buildNewPlayer';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

export default function CharacterSelection() {
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

  const [divs, setDivs] = useState([]);
  const [build, setBuild] = useState(true);
  const [dmView, setDmView] = useState([]);
  const [playerObjectState, setPlayerObjectState] = useState(playerObject);
  const [firebaseInfo, setFirebaseInfo] = useState([]); // Initialize firebaseInfo as an empty array

  console.log(playerObjectState);
  console.log(firebaseInfo);



  // Function to get info
  async function fetchWords() {
    try {
      // Get Firebase data
      const querySnapshot = await getDocs(collection(db, 'users'));
      console.log(querySnapshot);
      // Get to the info I want
      const wordsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(wordsArray);
      // Set the state to be an array containing the info
      setFirebaseInfo(wordsArray); // Update the state with the fetched data
    } catch (e) {
      console.error('Error fetching documents: ', e);
    }
  }
  
  function MyComponent() {
    useEffect(() => {
      fetchWords()
    }, []);
  }

  // Function to add info
  const myCollection = collection(db, 'users');

  // Add the object to the collection
  const pushToDB = (object) => {
    addDoc(myCollection, object)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

   function addCharacter(name, lvl, classType, race) {
    setDivs([
      ...divs,
      <CreatedChar
        divs={divs}
        setDivs={setDivs}
        key={divs.length}
        name={name}
        lvl={lvl}
        classType={classType}
        race={race}
      />,
    ]);
  }

  return (
    <div className="flex flex-col h-[700px] w-screen bg-blue-500">
      <Header />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="bg-slate-200 h-[500px] w-[90%]">
          <div className="flex w-full h-[70px] overflow-auto justify-between items-center p-4">
            <p>Create New Character</p>
            <button
                    className="bg-slate-400 w-[100px]"
                    onClick={() => {
                      fetchWords();
                    }}
                  >
                    Test
                  </button>
            <button
              onClick={() => {
                setBuild(!build);
              }}
              className="bg-sky-200 p-2 rounded"
            >
              {build ? 'create' : 'cancel'}
            </button>
          </div>
          <div></div>
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
                {firebaseInfo.map((char, index) => (
                    <CreatedChar
                    key={index}
                    name={char.name}
                    lvl={char.lvl}
                    classType={char.classType}
                    race={char.race}
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
<button
                    className="bg-slate-400 w-[100px]"
                    onClick={() => {
                      fetchWords();
                    }}
                  >
                    Test
                  </button>