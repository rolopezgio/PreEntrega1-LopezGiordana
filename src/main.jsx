import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH2uPM2dnONx_6hAAmoQmtmVHxYPwKuc8",
  authDomain: "ecommerce-ro-ee788.firebaseapp.com",
  projectId: "ecommerce-ro-ee788",
  storageBucket: "ecommerce-ro-ee788.appspot.com",
  messagingSenderId: "147705718911",
  appId: "1:147705718911:web:0d9fbc822870ac7283374a"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
