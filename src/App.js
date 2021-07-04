import './App.css';
import Escena from './components/escena/Escena';
import React from 'react';
 
const texts = require('./Textos.json');

const array = texts.map( text => <Escena text={text}/>)
 
function App() {
  return (
    <div className="App">
       {array} 
    </div>
  );
}

export default App;
