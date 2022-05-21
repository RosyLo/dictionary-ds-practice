import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NumberBoxList from './numberboxList';

function App() {
  const initialState = {
    sections: ["S1","S2","S3","S4"],
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
}
  const [state, setState] = useState(initialState)

  //process view data

  // 1.click item: value = section
  // 2.button can't click: when value !== section
  // 3.reset: value of 0~9 === section props from reset


  const resetNumber = (number, section) => {
    let updatedState = {...state}
    //reset
    if (!number) {
      let i = 0; 
      while (i < 10) {
        if (state[i] === section) {
          updatedState[i] = "";
        }
        i++;
      }
    }
    setState(updatedState);
  }

  const setNumber = (number, section) => {
    let updatedState = {...state}
    if (number && state[number] === section) {
      updatedState[number] = "";
    } else {
      updatedState[number] = section;
    }
    setState(updatedState);
  }

  return (
    <div className="App">
      {state.sections.map((section) => {
        return (
          <div className='wrap' key={section}>
            <NumberBoxList 
              section={section}
              numbers={Object.keys(state)}
              setNumber={setNumber}
              state={state}
            />
            <button
              value={section}
              onClick={(e) => {resetNumber('', e.target.value)}}>
              reset
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
