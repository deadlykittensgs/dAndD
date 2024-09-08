import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Player2ex from '../Components/Player2ex';
import BuildPlayer2 from '../Components/BuildPlayer2';
import { useAuth } from '../Components/authFunctions/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

export default function PlayGame() {
  const { currentUser } = useAuth();
  const [editMe, setEditMe] = useState(true);
  const [firebaseInfo, setFirebaseInfo] = useState([]);
  const [characterNumber, setCharacterNumber] = useState(0);
  const [playerData, setPlayerData] = useState({
    name: 'Default',
    lvl: 0,
    roll: 0,
    race: 'elf', 
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
    gold: 50,
    playerName: 'yourName',
    background: 'folk Hero',
    size: 'medium',
    alignment: 'NG',
    initiative: '+3',
    deathSaves: 0,
    actions: [
      { id: 100, action: 'Swing Sword', description: 'Swing a sword for x dmg' },
      { id: 200, action: 'Swing ax', description: 'Swing an ax for x dmg' },
      { id: 300, action: 'Shoot Bow', description: 'Shoot bow for x dmg' },
    ],
    savingThrows: [0, 0, 0, 0, 0, 0],
    SelectedSavingThrows: ['yes', 'no', 'no', 'no', 'no', 'no'],
    skills: Array(18).fill(0),
    selectedSkills: ['yes', ...Array(17).fill('no')],
    toolProficiencie: ['tool 1', 'tool 2', 'tool 3'],
    abilities: [
      { id: 400, action: 'dark Vision', description: 'see in the dark 60 ft' },
      { id: 500, action: 'trance', description: 'sleep shorter' },
      { id: 600, action: 'Fay Ancestory', description: 'Resist charms' },
    ],
    inventory: ['thing 1', 'thing 2', 'thing 3'],
    notes: ['note 1', 'note 2', 'note 3'],
    languages: ['language 1', 'language 2', 'language 3'],
  });

  // localStorage attempt
  const localStorageData = JSON.parse(localStorage.getItem('ChosenCreature')) || null;
  console.log("Local storage data:", localStorageData);

  // Fetch all characters from Firebase
  const fetchWords = async () => {
    try {
      if (currentUser) {
        const querySnapshot = await getDocs(collection(db, 'users', currentUser.uid, 'characters'));
        const wordsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Firebase data:", wordsArray);
        setFirebaseInfo(wordsArray);

        // If no ID in local storage, default to first character
        if (localStorageData) {
          searchById(localStorageData);
        } else {
          setPlayerData(wordsArray[characterNumber]);
        }
      }
    } catch (e) {
      console.error('Error fetching documents: ', e);
    }
  };

  // Search character by ID in firebaseInfo
  const searchById = (id) => {
    if (firebaseInfo.length > 0) {
      const foundObject = firebaseInfo.find(character => character.id === id);
      if (foundObject) {
        console.log("Found object:", foundObject);
        setPlayerData(foundObject);
      } else {
        console.log('Character not found');
      }
    }
  };

  // Function to cycle to the next character
  function nextCharacter() {
    let list = firebaseInfo.length;
    if (characterNumber < list - 1) {
      setCharacterNumber(characterNumber + 1);
    } else {
      setCharacterNumber(0);
    }
  }

  useEffect(() => {
    fetchWords();
  }, [currentUser]);

  useEffect(() => {
    if (firebaseInfo.length > 0 && localStorageData) {
      searchById(localStorageData);
    }
  }, [firebaseInfo, localStorageData]);

  return (
    <div className='flex flex-col h-screen w-screen bg'>
      <Header />
      <div className='flex overflow-auto justify-center flex-wrap h-full items-center'>
        {editMe ? (
          <Player2ex
            nextCharacter={nextCharacter}
            editMe={editMe}
            setEditMe={setEditMe}
            playerData={playerData}
            setPlayerData={setPlayerData}
          />
        ) : (
          <BuildPlayer2
            editMe={editMe}
            setEditMe={setEditMe}
            playerData={playerData}
            setPlayerData={setPlayerData}
          />
        )}
      </div>
    </div>
  );
}





