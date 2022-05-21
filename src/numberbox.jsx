import { useContext } from 'react';
import  { NumberContext } from './App'

const NumberBox = ({section, numberlist}) => {
    const {numberReducer, dispatch} = useContext(NumberContext)

    const selectNumber = (e) => {

        if (numberlist[e.target.value] === section) {
            dispatch({
                type: 'REMOVE_NUMBER',
                payload: e.target.value
            })
            return;
        }

        dispatch({
            type: 'SELECT_NUMBER',
            payload: {number: e.target.value, section: e.target.name}
        })
    }

    const reset = () => {
        numberlist.forEach(index => {
            if (numberReducer[index] === section) {
                dispatch({
                    type: 'REMOVE_NUMBER',
                    payload: index
                })
            }
        });
    }

    return (
      <div className="numbersection">
        {section}
        {numberlist.map((number) =>
            <button value={number}
                key={`${section}-${number}`}
                onClick={selectNumber}
                name={section}
                disabled={numberReducer[number] === section || numberReducer[number] === 0 ? false : true}
                style={numberReducer[number] === section ? {backgroundColor: 'red'} : {}}>{number}</button>
            )}
        <button onClick={reset}>reset</button>
      </div>
    );
};

  export default NumberBox;


  