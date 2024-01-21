import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import React, { useState} from 'react'

function App() {
  const [mode,setMode]=useState('light');
  const setmode=()=>{
    if(mode==='light')
    setMode('dark');
  else
  setMode('light');
  };
  
  return (
    // <div classNameName="App">
    // this is in div
    // </div>
    <>
{/* <Navbar title="anay" link="LINK"/> */}
<Navbar title="textworld.com" link="home" mode={mode} togglemode={setmode}
/>
<div>
<TextForm togglemode={mode} />
</div>
</>
  );
}

export default App;
