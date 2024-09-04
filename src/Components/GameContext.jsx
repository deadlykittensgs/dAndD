import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerCharData, setPlayerCharData] = useState(null);

  return (
    <GameContext.Provider value={{ playerCharData, setPlayerCharData }}>
      {children}
    </GameContext.Provider>

  );
};
