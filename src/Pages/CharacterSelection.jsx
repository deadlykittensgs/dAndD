import React, { useState, useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CreatedChar from '../Components/CreatedChar';
import BuildNewPlayer from '../Components/buildNewPlayer';
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { useAuth } from '../Components/authFunctions/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../Components/GameContext'; // Import the context

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

  const addStaticClasses = (playerObject) => {
    return {
      ...playerObject,
      staticClasses: staticClasses,
    };
  };

  const { playerCharData, setPlayerCharData } = useContext(GameContext); // Use context
  const [divs, setDivs] = useState([]);
  const [build, setBuild] = useState(true);
  const [playerObjectState, setPlayerObjectState] = useState(playerObject);
  const [firebaseInfo, setFirebaseInfo] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();



  // Function to get info
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

  useEffect(() => {
    fetchWords();
  }, [currentUser]);

  const pushToDB = async (object) => {
    try {
      if (currentUser) {
        const myCollection = collection(db, 'users', currentUser.uid, 'characters');
        const docRef = await addDoc(myCollection, object);
        console.log('Document written with ID: ', docRef.id);
        fetchWords();
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (!currentUser || !id) {
        console.error("User not authenticated or ID is undefined");
        return;
      }

      console.log(`Attempting to delete document with ID: ${id}`);
      const docRef = doc(db, 'users', currentUser.uid, 'characters', id);
      await deleteDoc(docRef);
      console.log(`Document with ID: ${id} deleted successfully.`);
      fetchWords();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  function addCharacter(name, lvl, classType, race) {
    setDivs([
      ...divs,
      <CreatedChar
        divs={divs}
        setDivs={setDivs}
        key={name + lvl} // Ensure unique key
        name={name}
        lvl={lvl}
        classType={classType}
        race={race}
      />,
    ]);
  }

  const selectPlayer = async (id) => {
    try {
      const docRef = doc(db, 'users', currentUser.uid, 'characters', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPlayerCharData(docSnap.data());
        navigate("/playgame", { state: { playerData: docSnap.data() } });
      } else {
        console.log('No such document!');
      }
    } catch (e) {
      console.error('Error selecting player: ', e);
    }
  };

  return (
    <div className="flex flex-col h-[700px] w-screen bg-blue-500">
      <Header />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="bg-slate-200 h-[500px] w-[90%]">
          <div className="flex w-full h-[70px] overflow-auto justify-between items-center p-4">
            <p>Create New Character</p>
            <div className='flex gap-1'>
              <button
                onClick={() => fetchWords()} // Refresh data without reloading
                className="bg-sky-200 p-2 rounded"
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
              <button
                onClick={() => setBuild(!build)}
                className="bg-sky-200 p-2 rounded"
              >
                {build ? <i className="fa-solid fa-user-plus"></i> : <i className="fa-solid fa-ban"></i>}
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[400px] w-full overflow-y-auto">
            {build ? (
              divs
            ) : (
              <BuildNewPlayer
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
                  {firebaseInfo.map((char) => (
                    <CreatedChar
                      key={char.id}
                      id={char.id}
                      name={char.name}
                      lvl={char.lvl}
                      classType={char.classType}
                      race={char.race}
                      handleDelete={handleDelete}
                      selectPlayer={selectPlayer}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
