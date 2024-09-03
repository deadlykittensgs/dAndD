import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nopage from './Pages/Nopage';
import CharacterSelection from './Pages/CharacterSelection';
import PlayGame from './Pages/PlayGame';
import { AuthProvider } from './Components/authFunctions/AuthContext';
import ProtectedRoute from './Components/authFunctions/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Use ProtectedRoute within the Routes */}
          <Route path="/charecterselection" element={<ProtectedRoute> <CharacterSelection /> </ProtectedRoute>}/>
          <Route path="/playgame" element={<ProtectedRoute>  <PlayGame /> </ProtectedRoute>} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
