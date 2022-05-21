import logo from './logo.svg';
import './App.css';
import { createContext, useReducer, useState } from 'react';
import NumberBox from './numberbox';
import { initilaState } from './reducer';
import { numberSwitcher } from './reducer';

export const NumberContext = createContext({})

function App() {

  const [numberReducer, dispatch] = useReducer(numberSwitcher, initilaState)

  return (
    <div className="App">
     <NumberContext.Provider value={{numberReducer, dispatch}}>
        <NumberBox section={'S1'} numberlist={Object.keys(initilaState)}/>
        <NumberBox section={'S2'} numberlist={Object.keys(initilaState)}/>
        <NumberBox section={'S3'} numberlist={Object.keys(initilaState)}/>
        <NumberBox section={'S4'} numberlist={Object.keys(initilaState)}/>
     </NumberContext.Provider>
    </div>
  );
}

export default App;
