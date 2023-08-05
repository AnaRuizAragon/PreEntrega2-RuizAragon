import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN6Ei6_BvjP-R54b5l-8MXQdkZ0FCuL_w",
  authDomain: "tu-zona-gamer.firebaseapp.com",
  projectId: "tu-zona-gamer",
  storageBucket: "tu-zona-gamer.appspot.com",
  messagingSenderId: "867204509264",
  appId: "1:867204509264:web:8c1a382708ef4d0559eb55"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
