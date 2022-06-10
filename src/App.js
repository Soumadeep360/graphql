import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createNewInfo,updateInfo,deleteInfo} from './jqlFunctions/instruction';

function App() {

  const hardData={phoneNumber:"8888888888",name:"Neil"};
  const hardData1={phoneNumber:"8888888880",name:"soumadeep"};
  const hardData2={name:"Neil"};
  return (
    <div className="App">

      <button onClick={()=>createNewInfo(hardData)}>create new info</button>
      <button onClick={()=>updateInfo(hardData1)}>update new info</button>
      <button onClick={()=>deleteInfo(hardData2)}>delete info</button>
    </div>
  );
}

export default App;
