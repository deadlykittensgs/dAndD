import React, { useState,  useContext, useEffect  } from 'react';
import Header from '../Components/Header';
import Player2ex from '../Components/Player2ex';
import { GameContext } from '../Components/GameContext';



export default function PlayGame() {

  const { playerCharData } = useContext(GameContext);
// change this with char select 
  const [playerData, setPlayerData] = useState({
    name: 'Player t',
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

  const changeDetails = (newData) => {
    setPlayerData(newData);
  };




  useEffect(() => {
    if (playerCharData) {
      setPlayerData(playerCharData); // Initialize playerData with playerCharData
    }
  }, [playerCharData]);

  return (
    <div className='flex flex-col h-screen w-screen bg'>
      <Header />
      <div className='flex overflow-auto justify-center flex-wrap h-full items-center'>
        <Player2ex playerData={playerData} setPlayerData={setPlayerData} />
      </div>
    </div>
  );
}
