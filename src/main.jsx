import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./Components/authFunctions/AuthContext.jsx"
import { GameProvider } from './Components/GameContext';




// auth provider is providing the details of user on all pages

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GameProvider>
      <App />
      </GameProvider>
    </AuthProvider>
  </React.StrictMode>,
)
