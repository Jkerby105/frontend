import './App.css';
import React, {useState} from 'react';
import { Adminpage } from './Adminpage.jsx'
import { Header} from './Header.jsx'
import {Loginform} from './Loginform.jsx'

function App() {
   /**this is a useState hook
     with conditional render */
     const [isLoggedIn, setIsLoggedIn] = useState(false)

     function login(){
       const username = document.getElementById('username').value;
       const password = document.getElementById('password').value;

        if (username === "one" && password === "0") {
          setIsLoggedIn(true);
        } else {
          alert('Invalid credentials');
        }

     }
  return (
    <>
    <Header/>
    <div className='App'>
      <Loginform/>
    </div>
    </>
  );
}

export default App;
