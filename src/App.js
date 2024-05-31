
import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Textutils from './components/Textutils.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  const removeBodyColors = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const [mode,setMode]=useState('light');
  
  const toggleMode=(cls)=>{
    removeBodyColors();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      document.title='Textutils-DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.title='Textutils-LightMode'
    }
  } 
  
  return(
    <Router>

      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/" element={<Textutils title="Textutils-Word counter,Character counter" mode={mode} />} />
        </Routes>
      </div>

    </Router>
  )

}
