import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createNewInfo} from './jqlFunctions/instruction';

function App() {

  const hardData={phoneNumber:"8888888888",name:"soumadeep"};
  return (
    <div className="App">

      <button onClick={()=>createNewInfo(hardData)}>create new info</button>
    </div>
  );
}

export default App;
